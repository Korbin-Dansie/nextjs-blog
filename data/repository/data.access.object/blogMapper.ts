import { User } from "../../../core/models/user";
import mysql, { RowDataPacket } from "mysql2/promise";

export class UserMapper extends Blog {
  private rowData: IBlogRow;

  constructor(rowData: IBlogRow) {
    super(
      rowData.id,
      rowData.user_id,
      rowData.title,
      rowData.body,
    );
    this.rowData = rowData;
  }
}

export interface IBlogRow extends RowDataPacket {
  id: number;
  user_id: number;
  title: string;
  body: string;
}
