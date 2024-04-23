# API Primer

### Trackable State (basic)

```typescript
const state = trackableState({ counter: 0 });

state.counter.track((value) => console.log(`The counter is now ${value}`));

state.transaction((proxy) => proxy.counter++);

const eval = state.evaluation(({ counter }) => `${counter.toString} evaluation`);

evaluation.track((evaluatedValue) => console.log(evaluatedValue));

state.raw.counter;
```

Quick react primer:

```typescript
const CounterDisplay: React.FC = () => {
    const counterValue = useTrack(state.counter);

    return <div>{counterValue}</div>;
}
```

### Entity API

```typescript
const counterEntity = entity({
    trackableState: { counter: 0 },
    transactions: {
        increment: (state) => (byAmt: number) => state.counter += byAmt,
    },
    evaluations: {
        descriptiveText: (state) => `The counter is now ${state.counter}`,
    },
});

counterEntity.counter.track
