import { User } from "../../../core/models/user";
import mysql, { RowDataPacket } from "mysql2/promise";

export class UserMapper extends User {
  private rowData: IUserRow;

  constructor(rowData: IUserRow) {
    super(
      rowData.id,
      rowData.first_name,
      rowData.last_name,
      rowData.email,
      rowData.hashed_password
    );
    this.rowData = rowData;
  }
}

export interface IUserRow extends RowDataPacket {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  hashed_password: string;
}
