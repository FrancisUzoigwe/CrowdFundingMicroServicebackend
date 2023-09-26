export enum STATUS {
  OK = 200,
  CREATED = 201,
  BAD = 400,
  N0 = 404,
}

export interface iError {
  errorName: string;
  errorMessage: string;
  errorSuccess: boolean;
  errorStatus: STATUS;
}
// class exportation
export class ErrorFile extends Error {
  public readonly errorName: string;
  public readonly errorMessage: string;
  public readonly errorStatus: STATUS;
  public readonly errorSuccess: boolean = false;
  constructor(arrgs: iError) {
    super(arrgs.errorMessage);
    (this.errorName = arrgs.errorName),
      (this.errorMessage = arrgs.errorMessage),
      (this.errorStatus = arrgs.errorStatus);
    if (this.errorSuccess !== undefined) {
      this.errorSuccess = arrgs.errorSuccess;
    }
    Error.captureStackTrace(this);
  }
}
