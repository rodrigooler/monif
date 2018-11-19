import webhookDiscord from "webhook-discord";

import { IDiscordConfig } from "./interfaces";

let DiscordWebhook = new webhookDiscord.Webhook();

const monif = ({ discord }: IDiscordConfig) => {
  DiscordWebhook = new webhookDiscord.Webhook(discord.url);
};

const discord = (
  f: Function,
  {
    errorMessage = "Error",
    successMessage = "Success",
    webhookName = "Monif WebHook"
  }
) => {
  try {
    f();
    DiscordWebhook.success(webhookName, successMessage);
  } catch (err) {
    DiscordWebhook.err(webhookName, errorMessage);
  }
};

export { discord };
export default monif;
