type A = {
  // commentA
  [a in A]: string;
}

type B = {
  /* commentB */ [b in B]: string
}

type C = {
  [/* commentC */ c in C]: string
}

type D = {
  [d /* commentD */ in D]: string
}

type E = {
  [e in /* commentE */ E]: string
}

type F = {
  [f in F /* commentF */]: string
}

type G = {
  [g in G] /* commentG */: string
}

type H = { /* commentH */ [h in H]: string }

type I = { [/* commentI */ i in I]: string }

type J = { [j /* commentJ */ in J]: string }

type K = { [k in /* commentK */ K]: string }

type L = { [l in L /* commentL */]: string }

type M = { [m in M] /* commentG */: string }

// https://github.com/excalidraw/excalidraw/blob/712f2675195ace8d507f563ec4306efe319b3c84/packages/common/src/utility-types.ts#L61-L64
type MakeBrand<T extends string> = {
  /** @private using ~ to sort last in intellisense */
  [K in `~brand~${T}`]: T;
};
