type Untrack = () => void;
type TrackCallback<T> = (value: T) => void;

export interface ITrackable<T> {
    track: (cb: TrackCallback<T>) => Untrack;
}
