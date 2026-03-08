import type { ReactNode } from "react";

type ModalItem = {
  id: string;
  content: ReactNode;
  onClose?: () => void;
  autoPlay?: number;
};

class ModalStore {
  private _modalList: ModalItem[] = []; // 모달 리스트 관리
  private _listner: ((list: ModalItem[]) => void) | null = null;
  private _timers = new Map<string, NodeJS.Timeout>(); // 타이머 관리

  subscribe(callback: (list: ModalItem[]) => void) {
    this._listner = callback; // 모달 리스트 상태 업데이트 함수 등록
  }

  unsubscribe() {
    this._listner = null;
  }

  open(
    content: ReactNode,
    autoPlay?: number,
    onClose?: () => void,
    id: string = new Date().toString()
  ) {
    const new_modal = { id: id, content: content, autoPlay, onClose };
    this._modalList = [...this._modalList, new_modal];
    this._listner?.(this._modalList);

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
    this._listner?.(this._modalList);

    if (target?.onClose) target.onClose();
  }

  reset() {
    this._modalList = [];
    this._listner?.(this._modalList);
  }
}

export const modalStore = new ModalStore();
