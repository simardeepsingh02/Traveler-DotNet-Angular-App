﻿using System;
using System.Collections.Generic;

namespace Traveler.DALayer.Models;

public partial class VehicleBooked
{
    public int VehicleBookingId { get; set; }

    public int? VehicleId { get; set; }

    public string VehicleName { get; set; } = null!;

    public DateTime BookingDate { get; set; }

    public string PickupTime { get; set; } = null!;

    public int NoOfHours { get; set; }

    public int NoOfKms { get; set; }

    public decimal TotalCost { get; set; }

    public string? VehicleStatus { get; set; }

    public virtual Vehicle? Vehicle { get; set; }
}
