export interface ConfigFile {
  app: ConfigApp;
  api: ConfigApi;
}

export interface ConfigApi {
  base: string;
  paths: ApiPaths;
}

export interface ApiPaths {
  endpoints: EndpointPaths;
}

export interface EndpointPaths {
  repositories: string;
  commits: string;
  code: string;
  issues: string;
  users: string;
  topics: string;
  labels: string;
}

export interface ConfigApp {
  base: string;
}
