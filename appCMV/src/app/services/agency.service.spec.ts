import { TestBed, inject } from '@angular/core/testing';
import { AgencyServiceService } from './agency.service';

describe('AgencyService', () => {
  let service: AgencyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgencyServiceService);
  });


  it('should ...', inject([AgencyServiceService], (service: AgencyServiceService) => {
    expect(service).toBeTruthy();
  }));
});
