import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IPackage } from 'src/app/traveler-interfaces/Package';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ICategory } from '../../app/traveler-interfaces/Category';
import { IPackageDetails } from '../../app/traveler-interfaces/PackageDetails';
import { IBookPackage } from '../../app/traveler-interfaces/BookPackage';
import { IViewBookings } from '../../app/traveler-interfaces/ViewBookings';
import { IVehicle } from '../../app/traveler-interfaces/Vehicle';
import { IHotel } from '../../app/traveler-interfaces/Hotel';
@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private http: HttpClient) { }

  getPackages(): Observable<IPackage[]> {
    let temp = this.http.get<IPackage[]>('https://localhost:44363/api/TravelAway/GetPackages').pipe(catchError(this.errorHandler))
    return temp;
  }

  getVehicles(): Observable<IVehicle[]> {
    let temp = this.http.get<IVehicle[]>('https://localhost:44363/api/TravelAway/GetVehicles').pipe(catchError(this.errorHandler))
    return temp;
  }

  getHotels(): Observable<IHotel[]> {
    let temp = this.http.get<IHotel[]>('https://localhost:44363/api/TravelAway/GetHotels').pipe(catchError(this.errorHandler))
    return temp;
  }

  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>('https://localhost:44363/api/TravelAway/GetPackageCategories').pipe(catchError(this.errorHandler));
  }
  getPackageDetails(packageId: string): Observable<IPackageDetails[]> {
    let PackageId = { packageId: packageId };
    let temp = this.http.get<IPackageDetails[]>('https://localhost:44363/api/TravelAway/GetPackageDetailsByPackageId', { params: PackageId }).pipe(catchError(this.errorHandler));
    return temp;
  }

  bookPackage(bookedpkg: IBookPackage): Observable<number> {
    let temp = this.http.post<number>('https://localhost:44363/api/TravelAway/AddBookPackage', bookedpkg).pipe(catchError(this.errorHandler));
    return temp;
  }

  getBookings(email: string): Observable<IViewBookings[]> {
    let Email = { email: email };
    let temp = this.http.get<IViewBookings[]>('https://localhost:44363/api/TravelAway/ViewBookedPackages', { params: Email }).pipe(catchError(this.errorHandler));
    return temp;
  }

  errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error.message || "Server Error");
  }
}
