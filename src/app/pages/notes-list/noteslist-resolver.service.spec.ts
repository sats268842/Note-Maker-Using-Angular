import { TestBed } from '@angular/core/testing';

import { NoteslistResolverService } from './noteslist-resolver.service';

describe('NoteslistResolverService', () => {
  let service: NoteslistResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteslistResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
