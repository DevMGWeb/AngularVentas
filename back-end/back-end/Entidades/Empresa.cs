using back_end.Validaciones;
using NetTopologySuite.Geometries;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Entidades
{
    public class Empresa
    {
        public int Id { get; set; }
        
        [Required(ErrorMessage = "El campo {0} es requerido")]
        [StringLength(maximumLength: 50, MinimumLength = 3, ErrorMessage = "El campo {0} debe tener un minimo de {2} y un maximo de {1}")]
        [PrimeraLetraMayuscula]
        public string Nombre { get; set; }

        [StringLength(maximumLength: 50, MinimumLength = 3, ErrorMessage = "El campo {0} debe tener un minimo de {2} y un maximo de {1}")]
        [PrimeraLetraMayuscula]
        public string NombreComercial { get; set; }

        [Required(ErrorMessage = "El campo {0} es requerido")]
        [StringLength(maximumLength: 11, MinimumLength = 3, ErrorMessage = "El campo {0} debe tener un minimo de {2} y un maximo de {1}")]
        [RegularExpression("[0-9]{11}")]
        public string Ruc { get; set; }
        public string Telefono { get; set; }

        [Required(ErrorMessage = "El campo {0} es requerido")]
        [EmailAddress(ErrorMessage = "El formato del campo {0} no es correcto")]
        public string Email { get; set; }
        public string Logo { get; set; }
        
        //[Required(ErrorMessage = "El campo {0} es requerido")]
        //public Point Ubicacion { get; set; }
    }
}
