﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.545445454554
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Постамат.
    /// </summary>
    // *** Start programmer edit section *** (Постамат CustomAttributes)

    // *** End programmer edit section *** (Постамат CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПостаматE", new string[] {
            "Номер as \'Номер\'",
            "Адрес as \'Адрес\'",
            "Статус as \'Статус\'",
            "СлужбаДоставки as \'Служба доставки\'",
            "СлужбаДоставки.Наименвоание as \'Наименвоание\'"}, Hidden=new string[] {
            "СлужбаДоставки.Наименвоание"})]
    [AssociatedDetailViewAttribute("ПостаматE", "Ячейка", "ЯчейкаE", true, "", "Ячейка", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("ПостаматE", "СлужбаДоставки", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименвоание")]
    [View("ПостаматL", new string[] {
            "Номер as \'Номер\'",
            "Адрес as \'Адрес\'",
            "Статус as \'Статус\'",
            "СлужбаДоставки.Наименвоание as \'Наименвоание\'"})]
    public class Постамат : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.545445454554.Статусы fСтатус;
        
        private int fНомер;
        
        private string fАдрес;
        
        private IIS.545445454554.СлужбаДоставки fСлужбаДоставки;
        
        private IIS.545445454554.DetailArrayOfЯчейка fЯчейка;
        
        // *** Start programmer edit section *** (Постамат CustomMembers)

        // *** End programmer edit section *** (Постамат CustomMembers)

        
        /// <summary>
        /// Адрес.
        /// </summary>
        // *** Start programmer edit section *** (Постамат.Адрес CustomAttributes)

        // *** End programmer edit section *** (Постамат.Адрес CustomAttributes)
        [StrLen(255)]
        public virtual string Адрес
        {
            get
            {
                // *** Start programmer edit section *** (Постамат.Адрес Get start)

                // *** End programmer edit section *** (Постамат.Адрес Get start)
                string result = this.fАдрес;
                // *** Start programmer edit section *** (Постамат.Адрес Get end)

                // *** End programmer edit section *** (Постамат.Адрес Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Постамат.Адрес Set start)

                // *** End programmer edit section *** (Постамат.Адрес Set start)
                this.fАдрес = value;
                // *** Start programmer edit section *** (Постамат.Адрес Set end)

                // *** End programmer edit section *** (Постамат.Адрес Set end)
            }
        }
        
        /// <summary>
        /// Номер.
        /// </summary>
        // *** Start programmer edit section *** (Постамат.Номер CustomAttributes)

        // *** End programmer edit section *** (Постамат.Номер CustomAttributes)
        public virtual int Номер
        {
            get
            {
                // *** Start programmer edit section *** (Постамат.Номер Get start)

                // *** End programmer edit section *** (Постамат.Номер Get start)
                int result = this.fНомер;
                // *** Start programmer edit section *** (Постамат.Номер Get end)

                // *** End programmer edit section *** (Постамат.Номер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Постамат.Номер Set start)

                // *** End programmer edit section *** (Постамат.Номер Set start)
                this.fНомер = value;
                // *** Start programmer edit section *** (Постамат.Номер Set end)

                // *** End programmer edit section *** (Постамат.Номер Set end)
            }
        }
        
        /// <summary>
        /// Статус.
        /// </summary>
        // *** Start programmer edit section *** (Постамат.Статус CustomAttributes)

        // *** End programmer edit section *** (Постамат.Статус CustomAttributes)
        public virtual IIS.545445454554.Статусы Статус
        {
            get
            {
                // *** Start programmer edit section *** (Постамат.Статус Get start)

                // *** End programmer edit section *** (Постамат.Статус Get start)
                IIS.545445454554.Статусы result = this.fСтатус;
                // *** Start programmer edit section *** (Постамат.Статус Get end)

                // *** End programmer edit section *** (Постамат.Статус Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Постамат.Статус Set start)

                // *** End programmer edit section *** (Постамат.Статус Set start)
                this.fСтатус = value;
                // *** Start programmer edit section *** (Постамат.Статус Set end)

                // *** End programmer edit section *** (Постамат.Статус Set end)
            }
        }
        
        /// <summary>
        /// Постамат.
        /// </summary>
        // *** Start programmer edit section *** (Постамат.СлужбаДоставки CustomAttributes)

        // *** End programmer edit section *** (Постамат.СлужбаДоставки CustomAttributes)
        [PropertyStorage(new string[] {
                "СлужбаДоставки"})]
        [NotNull()]
        public virtual IIS.545445454554.СлужбаДоставки СлужбаДоставки
        {
            get
            {
                // *** Start programmer edit section *** (Постамат.СлужбаДоставки Get start)

                // *** End programmer edit section *** (Постамат.СлужбаДоставки Get start)
                IIS.545445454554.СлужбаДоставки result = this.fСлужбаДоставки;
                // *** Start programmer edit section *** (Постамат.СлужбаДоставки Get end)

                // *** End programmer edit section *** (Постамат.СлужбаДоставки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Постамат.СлужбаДоставки Set start)

                // *** End programmer edit section *** (Постамат.СлужбаДоставки Set start)
                this.fСлужбаДоставки = value;
                // *** Start programmer edit section *** (Постамат.СлужбаДоставки Set end)

                // *** End programmer edit section *** (Постамат.СлужбаДоставки Set end)
            }
        }
        
        /// <summary>
        /// Постамат.
        /// </summary>
        // *** Start programmer edit section *** (Постамат.Ячейка CustomAttributes)

        // *** End programmer edit section *** (Постамат.Ячейка CustomAttributes)
        public virtual IIS.545445454554.DetailArrayOfЯчейка Ячейка
        {
            get
            {
                // *** Start programmer edit section *** (Постамат.Ячейка Get start)

                // *** End programmer edit section *** (Постамат.Ячейка Get start)
                if ((this.fЯчейка == null))
                {
                    this.fЯчейка = new IIS.545445454554.DetailArrayOfЯчейка(this);
                }
                IIS.545445454554.DetailArrayOfЯчейка result = this.fЯчейка;
                // *** Start programmer edit section *** (Постамат.Ячейка Get end)

                // *** End programmer edit section *** (Постамат.Ячейка Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Постамат.Ячейка Set start)

                // *** End programmer edit section *** (Постамат.Ячейка Set start)
                this.fЯчейка = value;
                // *** Start programmer edit section *** (Постамат.Ячейка Set end)

                // *** End programmer edit section *** (Постамат.Ячейка Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПостаматE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПостаматE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПостаматE", typeof(IIS.545445454554.Постамат));
                }
            }
            
            /// <summary>
            /// "ПостаматL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПостаматL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПостаматL", typeof(IIS.545445454554.Постамат));
                }
            }
        }
    }
}
