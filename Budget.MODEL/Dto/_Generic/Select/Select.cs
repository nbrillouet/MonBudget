using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Budget.MODEL.Dto
{
    public class SelectDto
    {
        public int Id { get; set; }
        public string Label { get; set; }

    }

    public class SelectValueDto<T>
    {
        public int Id { get; set; }
        public string Label { get; set; }
        public T Value { get; set; }
    }

    public class SelectNameValueDto<T>
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public T Value { get; set; }
    }

    //public class SelectColorDto
    //{
    //    public int Id { get; set; }
    //    public string Label { get; set; }
    //    public string Color { get; set; }

    //}

    public class ComboSimple<T>
    {
        public List<T> List { get; set; }
        public SelectDto Selected { get; set; }
    }

    public class ComboMultiple<T>
    {
        public List<T> List { get; set; }
        public List<SelectDto> ListSelected { get; set; }
    }

    public class ComboNameValueMultiple<T,U>
    {
        public List<T> List { get; set; }
        public List<SelectNameValueDto<U>> ListSelected { get; set; }

        public ComboNameValueMultiple()
        {
            List = new List<T>();
            ListSelected = new List<SelectNameValueDto<U>>();
        }
    }

    public enum EnumSelectType
    {
        Empty = 0,
        Inconnu = 1,
        Inconnue = 11,
        Tous =2,
        Toutes=22,
        Aucun=3,
        Aucune=33
    }
}
