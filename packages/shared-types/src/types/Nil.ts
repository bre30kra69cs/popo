import { Nlx } from "./Nlx";
import { Ulx } from "./Ulx";

export type Nil<T> = Nlx<Ulx<T>>;
