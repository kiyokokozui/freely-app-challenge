import type { ActionCreator } from "@reduxjs/toolkit";

export type ActionsOf<T extends { [k in keyof T]: ActionCreator<unknown> }> = {
  [K in keyof T]: ReturnType<T[K]>;
};

export type AllActionsOf<T extends { [k in keyof T]: ActionCreator<unknown> }> =
  ActionsOf<T>[keyof T];

export type AllActionsOfExcept<
  T extends { [k in keyof T]: ActionCreator<unknown> },
  K extends keyof T
> = ActionsOf<T>[Exclude<keyof T, K>];
