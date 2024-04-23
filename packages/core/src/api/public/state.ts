import { ITrackable } from "./trackable";
import { ITransactionTarget } from "./transactionTarget";

export interface ITrackableState<T> extends ITrackable<T>, ITransactionTarget<T> {}
