import type { ReactNode } from "react";

interface ModalItem {
  id: string;
  content: ReactNode;
  onClose?: () => void;
  autoPlay?: number;
}

class ModalStore {
  private _modalList: ModalItem[] = []; // 모달 리스트 관리
  private _listeners = new Set<(list: ModalItem[]) => void>();
  private _timers = new Map<string, NodeJS.Timeout>(); // 타이머 관리

  private notify() {
    this._listeners.forEach((listener) => {
      listener(this._modalList);
    });
  }

  subscribe(callback: (list: ModalItem[]) => void) {
    this._listeners.add(callback); // 모달 리스트 상태 업데이트 함수 등록

    return () => {
      this._listeners.delete(callback);
    };
  }

  open(
    content: ReactNode,
    autoPlay?: number,
    onClose?: () => void,
    id: string = new Date().toString()
  ) {
    const newModal = { id, content, autoPlay, onClose }; // 새로 열고자 하는 모달

    // 기존 타이머(중복)가 있다면 제거
    if (this._timers.has(id)) {
      clearTimeout(this._timers.get(id));
      this._timers.delete(id);
    }

    // 리스트에서 기존 모달을 제거하고, 최상단에 새 모달 삽입
    const filteredList = this._modalList.filter((m) => m.id !== id);
    this._modalList = [...filteredList, newModal];

    this.notify();

    // 타이머 재설정
    if (autoPlay && autoPlay > 0) {
      const timer = setTimeout(() => {
        this.close(id);
      }, autoPlay);

      this._timers.set(id, timer);
    }
  }

  close(id: string) {
    // 수동으로 닫았을 때(ex. pathname 이동) 예약된 setTimeout이 실행되지 않도록 제거
    if (this._timers.has(id)) {
      clearTimeout(this._timers.get(id));
      this._timers.delete(id);
    }

    const target = this._modalList.find((m) => m.id === id);

    this._modalList = this._modalList.filter((modal) => modal.id !== id);
    this.notify();

    if (target?.onClose) target.onClose();
  }

  reset() {
    // 예약된 타이머 제거
    this._timers.forEach(clearTimeout);
    this._timers.clear(); // 메모리 참조 제거

    this._modalList = [];
    this.notify();
  }
}

export const modalStore = new ModalStore();
