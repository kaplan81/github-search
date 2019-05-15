/* tslint:disable:no-unused-variable */
import { TestBed } from '@angular/core/testing';
import { ConfigFileService } from '@github-search/ng-kit';
import * as fromCoreModels from '@user-search-core/config.model';
import { ConfigService } from '@user-search-core/config.service';
import { of } from 'rxjs';

const configFileMock: fromCoreModels.ConfigFile = {
  app: {
    base: 'http://localhost:4200'
  },
  api: {
    base: 'https://api.github.com/search',
    paths: {
      endpoints: {
        repositories: 'repositories',
        commits: 'commits',
        code: 'code',
        issues: 'issues',
        users: 'users',
        topics: 'topics',
        labels: 'labels'
      }
    }
  }
};

const configFileServiceMock = jest.fn<any, []>(() => ({
  configFile: jest.fn(() => of(configFileMock))
}));

describe('ConfigService', () => {
  let configService: ConfigService;
  let fileService: ConfigFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: ConfigFileService, useClass: configFileServiceMock }]
    });
    configService = TestBed.get(ConfigService);
    fileService = TestBed.get(ConfigFileService);
  });

  it('can be instantiated via DI', () => {
    expect(configService instanceof ConfigService).toBe(true);
  });

  it('gets its properties from ConfigFileService', async () => {
    async function appInitializer(): Promise<fromCoreModels.ConfigFile> {
      return await configService.loadConfig().toPromise();
    }
    fileService.configs = await appInitializer();

    expect(configService.app).toEqual(fileService.configs.app);
    expect(configService.apiBase).toEqual(fileService.configs.api.base);
    expect(configService.apiPathEndpoints).toEqual(fileService.configs.api.paths.endpoints);
  });
});
