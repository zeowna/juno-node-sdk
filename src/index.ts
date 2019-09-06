import { JunoSDK } from "./sdk";

export * from "./enums";
export * from "./structs";
export * from "./inputs";
export * from "./responses";
export * from "./resources";
export * from "./sdk";

const juno = new JunoSDK();

(async () => {
  await juno.transfer.requestTransfer("734012371EA9DB41EE3574677CE8FEB8CD3E38BAF3BCFA9AACFD78051915A27B", 1);
})();
