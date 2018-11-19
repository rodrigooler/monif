import discord from "webhook-discord";

import { IDiscordConfig, IDiscord } from "./interfaces";

let DiscordWebhook = null;

const monif = ({discord}: IDiscordConfig) => {
  DiscordWebhook = new discord.Webhook(discord.url);
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
    DiscordWebhook.success(
      webhookName
      successMessage,
    );
  } catch (err) {
    DiscordWebhook.err(
      webhookName,
      errorMessage,
    );
  }
};
