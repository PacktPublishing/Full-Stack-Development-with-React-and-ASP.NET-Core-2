using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Villainy.Models
{
    public class VillainsContext : DbContext
    {
        public VillainsContext(DbContextOptions<VillainsContext> options)
            : base(options)
        {
        }

        public DbSet<Villain> Villains { get; set; }
    }
}
