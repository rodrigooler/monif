export interface IDiscordConfig {
  url?: string;
}

export interface IDiscord {
    errorMessage: string,
    successMessage: string,
    webhookName: string
}

export interface IConfig {
  discord: IDiscordConfig;
}
