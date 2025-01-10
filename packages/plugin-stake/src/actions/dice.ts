import {
    Action,
    IAgentRuntime,
    Memory,
    State,
    composeContext,
    elizaLogger,
    ModelClass,
    formatMessages,
    generateObject,
} from "@elizaos/core";



export const diceAction: Action = {
    name: "PLAY_DICE",
    similes: ["DICE", "PLAY", "PLAY_DICE"],
    description: "Play a dice game",
    validate: async (
        runtime: IAgentRuntime,
        message: Memory,
        state?: State
    ) => {
        const hasCredentials =
            !!process.env.STAKE_COOKIE && !!process.env.STAKE_TOKEN;
        elizaLogger.log(`Has credentials: ${hasCredentials}`);

        return hasCredentials;
    },
    handler: async (
        runtime: IAgentRuntime,
        roleNumber: Number,
        state?: State
    ): Promise<boolean> => {
        try {

        } catch (error) {
            elizaLogger.error("Error in post action:", error);
            return false;
        }
    },
    examples: [
        [
            {
                user: "{{user1}}",
                content: { text: "You should role at " },
            },
            {
                user: "{{agentName}}",
                content: {
                    text: "let play a new game!",
                    action: "PLAY_DICE",
                },
            },
        ],
        [
            {
                user: "{{user1}}",
                content: { text: "role with " },
            },
            {
                user: "{{agentName}}",
                content: {
                    text: "I'll role a new number.",
                    action: "PLAY_DICE",
                },
            },
        ],
    ],
};
