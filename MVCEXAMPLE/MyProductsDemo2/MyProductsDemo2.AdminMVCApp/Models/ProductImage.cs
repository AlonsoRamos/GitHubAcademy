//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MyProductsDemo2.AdminMVCApp.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class ProductImage
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public string ImagURL { get; set; }
        public Nullable<int> ProductId { get; set; }
        public Nullable<bool> Active { get; set; }
        public Nullable<System.DateTime> CreateDateTime { get; set; }
        public Nullable<System.DateTime> UpdateDateTime { get; set; }
    
        public virtual Product Product { get; set; }
    }
}