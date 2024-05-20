import { TFunction } from "i18next";

/** Add an extra property to the this namespace, make t accessible globally */
declare global {
  var t: TFunction;
}
