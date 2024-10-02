import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('UserService', () => {
  let service: UserService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { HttpClient, useValue: UserService }
      ]
    });
    service = TestBed.inject(UserService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deveria usar o metodo GET', () => {
    const spy = spyOn(http, "get").and.callThrough();
    service.getAll();
    expect(spy).toHaveBeenCalled();
  });
});
