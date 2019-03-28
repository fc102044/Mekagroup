using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace PruebasMEKAGROUP
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            try
            {
                if (txtNumero1.Text != "")
                {
                    int i, resultado;
                    String Aux, NumeroInvertido = " ";
                    lblError.Text = " ";
                    lblResultado.Text = " ";
                    if ((char.ToString(txtNumero1.Text[txtNumero1.TextLength - 1]) == "0") || (char.ToString(txtNumero1.Text[0]) == "0") )
                    {
                        lblError.Text = "Numero No valido por iniciar o finalizar en 0, no reversible";
                    }
                    else
                    {
                        for (i = txtNumero1.TextLength - 1; i >= 0; i--)
                        {
                            NumeroInvertido = NumeroInvertido + txtNumero1.Text[i];
                        }

                        resultado = int.Parse(NumeroInvertido) + int.Parse(txtNumero1.Text);
                        lblSuma.Text = Convert.ToString(resultado);
                        Aux = Convert.ToString(resultado);

                        for (i = 0; i <= txtNumero1.TextLength - 1; i++)
                        {
                            if (char.ToString(Aux[i]) == "0")
                            {
                                lblError.Text = "el resultado contiene un 0, no reversible";
                                break;
                            }
                            else
                            {
                                if ((int.Parse(char.ToString(Aux[i])) % 2) == 0)
                                {
                                    lblResultado.Text = lblResultado.Text + Aux[i] + " par, No reversible";
                                    break;
                                }
                                else
                                {
                                    lblResultado.Text = lblResultado.Text + Aux[i] + " impar, reversible ";
                                }
                            }
                        }
                        if ((char.ToString(Aux[Aux.Length - 1]) == "0") ||  (int.Parse(char.ToString(Aux[Aux.Length - 1])) % 2) == 0)
                        {
                            lblResultado.Text = lblResultado.Text + " "+ Aux[Aux.Length - 1] + "par,  No reversible";
                        }
                        else
                        {
                            lblResultado.Text = lblResultado.Text + Aux[Aux.Length - 1] + " impar, reversible ";
                        }
                    }
                }
                else
                {
                    lblError.Text = "Error, No digito un numero";
                }

            }
            catch (Exception E)
            {
                lblError.Text = "Se ingreso un caracter no permitido";
            }

        }
        private void lblResultado_Click(object sender, EventArgs e)
        {

        }

        private void btnCalculate_Click(object sender, EventArgs e)
        {
            try {
                lblResult.Text = "";
                int i,j=3,result1=0, result2=0 ,Result=0;
            int[,] Numbers = new int[3,3];
            Numbers[0, 0] = int.Parse(txt1.Text);
            Numbers[0, 1] = int.Parse(txt2.Text);
            Numbers[0, 2] = int.Parse(txt3.Text);
            Numbers[1, 0] = int.Parse(txt4.Text);
            Numbers[1, 1] = int.Parse(txt5.Text);
            Numbers[1, 2] = int.Parse(txt6.Text);
            Numbers[2, 0] = int.Parse(txt7.Text);
            Numbers[2, 1] = int.Parse(txt8.Text);
            Numbers[2, 2] = int.Parse(txt9.Text);

                for ( i =0; i<= 2; i++)
                {
                    result1 = result1 + Numbers[i, i];
                    j--;
                    result2 = result2 + Numbers[i, j];
                }


                Result = result1 - result2;

                lblResult.Text = Convert.ToString(Math.Abs(Result));
            }catch(Exception E)
            {
                lblResult.Text = "one character in to tex box is incorrect"
;            }
        }
    }
}
