import { Plugin } from "@elizaos/core";
import { diceAction } from "./actions/post";

export const stakePlugin: Plugin = {
    name: "stake",
    description: "Stake integration plugin for play games",
    actions: [diceAction],
    evaluators: [],
    providers: [],
};

export default stakePlugin;
