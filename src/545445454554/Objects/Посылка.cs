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
    /// Посылка.
    /// </summary>
    // *** Start programmer edit section *** (Посылка CustomAttributes)

    // *** End programmer edit section *** (Посылка CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПосылкаE", new string[] {
            "Номер as \'Номер\'",
            "Статус as \'Статус\'",
            "Транзакция as \'Транзакция\'",
            "Транзакция.Дата as \'Дата транзакции\'",
            "Транзакция.Время as \'Время\'",
            "Транзакция.Номер as \'Номер транзакции\'",
            "Транзакция.Пользователь.ФИО as \'ФИО пользователь\'",
            "Логистика as \'Логистика\'",
            "Логистика.Состояние as \'Состояние\'",
            "Логистика.Информация as \'Информация\'",
            "Ключ as \'Ключ\'",
            "Ключ.СгенКлюч as \'Сген ключ\'"}, Hidden=new string[] {
            "Транзакция.Время",
            "Логистика.Информация",
            "Ключ.СгенКлюч"})]
    [MasterViewDefineAttribute("ПосылкаE", "Транзакция", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Время")]
    [MasterViewDefineAttribute("ПосылкаE", "Логистика", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Информация")]
    [MasterViewDefineAttribute("ПосылкаE", "Ключ", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "СгенКлюч")]
    public class Посылка : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомер;
        
        private IIS.545445454554.Статус fСтатус;
        
        private IIS.545445454554.Транзакция fТранзакция;
        
        private IIS.545445454554.Логистика fЛогистика;
        
        private IIS.545445454554.Ключ fКлюч;
        
        private IIS.545445454554.Хранение fХранение;
        
        // *** Start programmer edit section *** (Посылка CustomMembers)

        // *** End programmer edit section *** (Посылка CustomMembers)

        
        /// <summary>
        /// Номер.
        /// </summary>
        // *** Start programmer edit section *** (Посылка.Номер CustomAttributes)

        // *** End programmer edit section *** (Посылка.Номер CustomAttributes)
        public virtual int Номер
        {
            get
            {
                // *** Start programmer edit section *** (Посылка.Номер Get start)

                // *** End programmer edit section *** (Посылка.Номер Get start)
                int result = this.fНомер;
                // *** Start programmer edit section *** (Посылка.Номер Get end)

                // *** End programmer edit section *** (Посылка.Номер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Посылка.Номер Set start)

                // *** End programmer edit section *** (Посылка.Номер Set start)
                this.fНомер = value;
                // *** Start programmer edit section *** (Посылка.Номер Set end)

                // *** End programmer edit section *** (Посылка.Номер Set end)
            }
        }
        
        /// <summary>
        /// Статус.
        /// </summary>
        // *** Start programmer edit section *** (Посылка.Статус CustomAttributes)

        // *** End programmer edit section *** (Посылка.Статус CustomAttributes)
        public virtual IIS.545445454554.Статус Статус
        {
            get
            {
                // *** Start programmer edit section *** (Посылка.Статус Get start)

                // *** End programmer edit section *** (Посылка.Статус Get start)
                IIS.545445454554.Статус result = this.fСтатус;
                // *** Start programmer edit section *** (Посылка.Статус Get end)

                // *** End programmer edit section *** (Посылка.Статус Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Посылка.Статус Set start)

                // *** End programmer edit section *** (Посылка.Статус Set start)
                this.fСтатус = value;
                // *** Start programmer edit section *** (Посылка.Статус Set end)

                // *** End programmer edit section *** (Посылка.Статус Set end)
            }
        }
        
        /// <summary>
        /// Посылка.
        /// </summary>
        // *** Start programmer edit section *** (Посылка.Ключ CustomAttributes)

        // *** End programmer edit section *** (Посылка.Ключ CustomAttributes)
        [PropertyStorage(new string[] {
                "Ключ"})]
        [NotNull()]
        public virtual IIS.545445454554.Ключ Ключ
        {
            get
            {
                // *** Start programmer edit section *** (Посылка.Ключ Get start)

                // *** End programmer edit section *** (Посылка.Ключ Get start)
                IIS.545445454554.Ключ result = this.fКлюч;
                // *** Start programmer edit section *** (Посылка.Ключ Get end)

                // *** End programmer edit section *** (Посылка.Ключ Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Посылка.Ключ Set start)

                // *** End programmer edit section *** (Посылка.Ключ Set start)
                this.fКлюч = value;
                // *** Start programmer edit section *** (Посылка.Ключ Set end)

                // *** End programmer edit section *** (Посылка.Ключ Set end)
            }
        }
        
        /// <summary>
        /// Посылка.
        /// </summary>
        // *** Start programmer edit section *** (Посылка.Логистика CustomAttributes)

        // *** End programmer edit section *** (Посылка.Логистика CustomAttributes)
        [PropertyStorage(new string[] {
                "Логистика"})]
        [NotNull()]
        public virtual IIS.545445454554.Логистика Логистика
        {
            get
            {
                // *** Start programmer edit section *** (Посылка.Логистика Get start)

                // *** End programmer edit section *** (Посылка.Логистика Get start)
                IIS.545445454554.Логистика result = this.fЛогистика;
                // *** Start programmer edit section *** (Посылка.Логистика Get end)

                // *** End programmer edit section *** (Посылка.Логистика Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Посылка.Логистика Set start)

                // *** End programmer edit section *** (Посылка.Логистика Set start)
                this.fЛогистика = value;
                // *** Start programmer edit section *** (Посылка.Логистика Set end)

                // *** End programmer edit section *** (Посылка.Логистика Set end)
            }
        }
        
        /// <summary>
        /// Посылка.
        /// </summary>
        // *** Start programmer edit section *** (Посылка.Транзакция CustomAttributes)

        // *** End programmer edit section *** (Посылка.Транзакция CustomAttributes)
        [PropertyStorage(new string[] {
                "Транзакция"})]
        [NotNull()]
        public virtual IIS.545445454554.Транзакция Транзакция
        {
            get
            {
                // *** Start programmer edit section *** (Посылка.Транзакция Get start)

                // *** End programmer edit section *** (Посылка.Транзакция Get start)
                IIS.545445454554.Транзакция result = this.fТранзакция;
                // *** Start programmer edit section *** (Посылка.Транзакция Get end)

                // *** End programmer edit section *** (Посылка.Транзакция Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Посылка.Транзакция Set start)

                // *** End programmer edit section *** (Посылка.Транзакция Set start)
                this.fТранзакция = value;
                // *** Start programmer edit section *** (Посылка.Транзакция Set end)

                // *** End programmer edit section *** (Посылка.Транзакция Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.545445454554.Хранение.
        /// </summary>
        // *** Start programmer edit section *** (Посылка.Хранение CustomAttributes)

        // *** End programmer edit section *** (Посылка.Хранение CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Хранение"})]
        public virtual IIS.545445454554.Хранение Хранение
        {
            get
            {
                // *** Start programmer edit section *** (Посылка.Хранение Get start)

                // *** End programmer edit section *** (Посылка.Хранение Get start)
                IIS.545445454554.Хранение result = this.fХранение;
                // *** Start programmer edit section *** (Посылка.Хранение Get end)

                // *** End programmer edit section *** (Посылка.Хранение Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Посылка.Хранение Set start)

                // *** End programmer edit section *** (Посылка.Хранение Set start)
                this.fХранение = value;
                // *** Start programmer edit section *** (Посылка.Хранение Set end)

                // *** End programmer edit section *** (Посылка.Хранение Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПосылкаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПосылкаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПосылкаE", typeof(IIS.545445454554.Посылка));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of Посылка.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfПосылка CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfПосылка CustomAttributes)
    public class DetailArrayOfПосылка : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.545445454554.DetailArrayOfПосылка members)

        // *** End programmer edit section *** (IIS.545445454554.DetailArrayOfПосылка members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type Посылка by index.
        /// </summary>
        /// <summary>
        /// Adds object with type Посылка.
        /// </summary>
        public DetailArrayOfПосылка(IIS.545445454554.Хранение fХранение) : 
                base(typeof(Посылка), ((ICSSoft.STORMNET.DataObject)(fХранение)))
        {
        }
        
        public IIS.545445454554.Посылка this[int index]
        {
            get
            {
                return ((IIS.545445454554.Посылка)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.545445454554.Посылка dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
