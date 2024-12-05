export type FN = (..._args: any[]) => any;

export type OBJ = { [key: string]: any };

export type OPT<X> = X | undefined | null;

const extractAttributeValue = (attr: any, arre: any[]) =>
  arre.map((item) => item[attr]);

//Curry
type Curry<P, R> = P extends [infer H]
  ? (arg: H) => R
  : P extends [infer H, ...infer T]
  ? (arg: H) => Curry<[...T], R>
  : never;

function curry<P extends any[], R>(fn: (...args: P) => R): Curry<P, R>;

function curry(fn: (...args: any) => any) {
  return fn.length === 0 ? fn() : (x: any) => curry(fn.bind(null, x));
}

//Pipeline
type FnsMatchPipe<FNS extends FN[]> = 1 extends FNS["length"]
  ? boolean
  : FNS extends [
      infer FN1st extends FN,
      infer FN2nd extends FN,
      ...infer FNRest extends FN[]
    ]
  ? Parameters<FN2nd> extends [ReturnType<FN1st>]
    ? FnsMatchPipe<[FN2nd, ...FNRest]>
    : never
  : never;

type Pipeline<FNS extends FN[]> = boolean extends FnsMatchPipe<FNS>
  ? 1 extends FNS["length"]
    ? FNS[0]
    : FNS extends [infer FNFIRST extends FN, ...FN[], infer FNLAST extends FN]
    ? (...args: Parameters<FNFIRST>) => ReturnType<FNLAST>
    : never
  : never;

function pipeline<FNS extends FN[]>(...fns: FNS): Pipeline<FNS>;
function pipeline<FNS extends FN[]>(...fns: FNS): FN {
  return fns.reduce(
    (result, f) =>
      (...args) =>
        f(result(...args))
  );
}

export { extractAttributeValue, curry, pipeline };
