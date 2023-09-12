import { TestBed } from '@angular/core/testing';

import { FavoriteService } from './favoritos.service';

describe('FavoritosService', () => {
  let service: FavoriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
