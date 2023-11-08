import 'i18next';

// declare custom type options so the return is always a string.
// fixes the error: Argument of type 'DefaultTFuncReturn' is not assignable to parameter of type string | undefined
declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}
