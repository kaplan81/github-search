import { Injectable } from '@angular/core';
import { ConfigFileService } from '@github-search/ng-kit';
import * as fromCoreModels from '@user-search-core/config.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private configFileService: ConfigFileService) {}

  loadConfig(): Observable<fromCoreModels.ConfigFile> {
    return this.configFileService.configFile<fromCoreModels.ConfigFile>();
  }

  get app(): fromCoreModels.ConfigApp {
    return this.configFileService.configs.app;
  }

  get apiBase(): string {
    return this.configFileService.configs.api.base;
  }

  get apiPathEndpoints(): fromCoreModels.EndpointPaths {
    return this.configFileService.configs.api.paths.endpoints;
  }
}
