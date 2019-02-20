using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;

namespace Budget.SERVICE._Helpers
{
    public static class FileHelper
    {
        public static List<char> GetExcludedChars()
        {
            List<char> excludedChars = new List<char>();
            excludedChars.Add('\'');
            //excludedChars.Add('*');
            excludedChars.Add('-');
            excludedChars.Add('/');
            excludedChars.Add('\\');
            excludedChars.Add('\"');
            excludedChars.Add(':');
            excludedChars.Add('.');

            return excludedChars;
        }

        public static string ExcludeForbiddenChars(string label)
        {
            List<char> excludedChars = GetExcludedChars();

            foreach (var excludedChar in excludedChars)
            {
                label = label.Replace(excludedChar.ToString(), string.Empty);
            }

            return label;
        }

        public static string ExcludeNumbers(string label)
        {
            return Regex.Replace(label, @"[\d-]", string.Empty);
        }

        public static string GetOperationLabelFromOperationLabelWork(string operationLabel, string operationLabelWork)
        {
            //recherche du label de l'operation en comparant le libellé work operation du libellé operation
            //int j = -1;
            //string label = string.Empty;
            //for (int i = 0; i < operationLabel.Length; i++)
            //{
            //    char c = Convert.ToChar(operationLabel.Substring(i, 1));
            //    if (!Char.IsNumber(c) && !FileHelper.GetExcludedChars().Contains(c))
            //    {
            //        if (!Equals(c, ' '))
            //            j++;
            //        if (j > operationLabelWork.Length - 1)
            //            break;

            //        char cTemp = Convert.ToChar(operationLabelWork.Substring(j, 1));
            //        if (Char.ToUpper(c).Equals(cTemp) || Equals(c, ' '))
            //        {
            //            label = label + c;
            //        }
            //    }
            //}

            //label = label.Trim();

            ////Recherche de tous les mots commencant par la 1ere lettre du work dans le label
            //var foundIndexes = new List<int>();
            //for (int i = 0; i < operationLabel.Length; i++)
            //    if (operationLabel[i] == Convert.ToChar(operationLabelWork.Substring(0,1))) foundIndexes.Add(i);

            ////mettre en string de longueur 4 
            //foreach(var index in foundIndexes)
            //{

            //}


            int j =0;
            string label = string.Empty;
            bool beginWord = false;

            for (int i = 0; i < operationLabel.Length; i++)
            {
                char c = Convert.ToChar(operationLabel.Substring(i, 1));
                if (!GetExcludedChars().Contains(c))
                {
                    //j = !Equals(c, ' ') ? j+1 : j;

                    if (j > operationLabelWork.Length - 1)
                        break;

                    char cw = Convert.ToChar(operationLabelWork.Substring(j, 1));
                    if (beginWord && (Char.ToUpper(c).Equals(cw) || Equals(c, ' ')))
                    {
                        label = label + c;
                        if(!Equals(c, ' '))
                            j++;
                    }
                    else if (!beginWord && (Char.ToUpper(c).Equals(cw) || Equals(c, ' ')))
                    {
                        label = label + c;
                        beginWord = true;
                        if (!Equals(c, ' '))
                            j++;
                    }
                    else if (beginWord)
                    {
                        label = string.Empty;
                        beginWord = false;
                        j = 0;
                    }
                }
            }

            label = label.Trim().ToUpper();

            return label;
        }

        //Index du premier chiffre trouvé dans un label
        public static int IndexFirstNumeric(string label)
        {
            int index = -1;
            for (int i = 0; i < label.Length; i++)
            {
                char c = Convert.ToChar(label.Substring(i, 1));
                if (Char.IsNumber(c))
                {
                    label = label.Substring(0, i);
                    index = i;
                    break;
                }
            }

            return index;
        }
    }
}
