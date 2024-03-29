import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddModifyCategoryType } from '@modules/admin/types/admin-actions.types';
import { ADMIN_FIELDS_LIST } from '@modules/admin/constants/stx-fields-list.const';
import { AdminStorageService } from '@modules/admin/services/admin-storage.service';

@Injectable()
export class CategoryFormHandlerService {

  constructor(
    private fb: FormBuilder,
    private adminStorageService: AdminStorageService,
  ) { }

  setFormGroupForCategoryAdd(formGroup: FormGroup): void {
    formGroup.addControl('name', this.fb.control(null, [Validators.required]));
  }

  setFormGroupForCategoryModify(formGroup: FormGroup): void {
    formGroup.addControl('category', this.fb.control(null, [Validators.required]));
    formGroup.addControl('name', this.fb.control(null, [Validators.required]));
  }

  clearControls(form: FormGroup, previousType: AddModifyCategoryType): void {
    this.adminStorageService.currentAction = previousType === 'AddCategory' ? 'ModifyCategory' : 'AddCategory';
    const previousFields = ADMIN_FIELDS_LIST[previousType];
    previousFields.forEach((field) => form.removeControl(field));
  }
}
