type TransactionProxy<T> = T;
type SyncTransactionRunner<T, R> = (state: TransactionProxy<T>) => R;
type AsyncTransactionRunner<T, R> = (state: TransactionProxy<T>) => Promise<R>

export interface ITransactionTarget<T> {
    transactUpon<R>(runner: SyncTransactionRunner<T, R>): R;
    transactUpon<R>(runner: AsyncTransactionRunner<T, R>): Promise<R>;
}
