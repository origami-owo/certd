import { AbstractAccess } from "./abstract-access";

export interface IAccessService {
  getById(id: any): AbstractAccess;
}