import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  modals: IModal[] = [];

  constructor() {}

  public register(id: string) {
    this.modals.push({
      id,
      visible: false,
    });
  }

  public isModalOpen(id: string): boolean {
    return !!this.modals.find((elem) => elem.id === id)?.visible;
  }

  public toggleModal(id: string) {
    const modal = this.modals.find((elem) => elem.id === id);

    if (!!modal) {
      modal.visible = !modal.visible;
    }
  }
}
