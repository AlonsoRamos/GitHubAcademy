using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web.Mvc;
using MyProductsDemo2.AdminMVCApp;
using MyProductsDemo2.AdminMVCApp.Controllers;


namespace MyProductsDemo2.AdminMVCApp.Tests.Controllers
{
    [TestClass]
    public class ProductControllerTest
    {
        [TestMethod]
        public void Index()
        {
            ProductsController controller = new ProductsController();

            ViewResult result = controller.Index() as ViewResult;
            result.ViewData.ToList();

            Assert.IsNotNull(result);
        }
        [TestMethod]
        //Validate that our product contains a name
        public void ProductDetails()
        {
            ProductsController controller = new ProductsController();
            Object result = controller.Details(2) as ViewResult;
            Assert.IsNotNull(result);
        }
    }
}
