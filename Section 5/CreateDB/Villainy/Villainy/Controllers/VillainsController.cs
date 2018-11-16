using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Villainy.Models;

namespace Villainy.Controllers
{
    [Route("api/[controller]")]
    public class VillainsController : Controller
    {
        private readonly VillainsContext _context;

        public VillainsController(VillainsContext context)
        {
            _context = context;

            if (_context.Villains.Count() == 0)
            {
                _context.Villains.Add(new Villain() { Name = "Junq", Powers = "Can make weapons and gadgets out of anything available", Hobbies = "Crochet, macrame, kidnapping" });
                _context.Villains.Add(new Villain() { Name = "Darkness", Powers = "Converts light into darkness", Hobbies = "Robbing banks, blackmail, puzzles" });
                _context.Villains.Add(new Villain() { Name = "Blast Wave", Powers = "Generates concussive blasts with his hands", Hobbies = "General villainy, doggie dancing" });
                _context.Villains.Add(new Villain() { Name = "Smoke Jumper", Powers = "Can control fire and smoke", Hobbies = "Extortion, arson, poetry" });
                _context.SaveChanges();
            }
        }

        //[HttpGet]
        //public List<Villain> GetVillains()
        //{
        //    return Villains;
        //}

        //[HttpGet("[action]/{name}")]
        //public Villain GetVillain(string name)
        //{
        //    var villain = Villains.Find((v) => v.Name.ToLower() == name.ToLower());

        //    if (villain == null)
        //    {
        //        return null;
        //    }
        //    else
        //    {
        //        return villain;
        //    }
        //}

        //[HttpPost]
        //public IActionResult AddVillain([FromBody]Villain item)
        //{
        //    Villains.Add(item);

        //    return Ok(new
        //    {
        //        success = true,
        //        returncode = "200"
        //    });
        //}

        //[HttpPut]
        //public IActionResult Update([FromBody]Villain villain)
        //{
        //    var villainToUpdate = Villains.Find((v) => v.Name == villain.Name);

        //    if (villainToUpdate == null)
        //    {
        //        return NotFound();
        //    }

        //    villainToUpdate.Powers = villain.Powers;
        //    villainToUpdate.Hobbies = villain.Hobbies;

        //    return Ok(new
        //    {
        //        success = true,
        //        returncode = "200"
        //    });
        //}

        //[HttpDelete("{name}")]
        //public IActionResult Delete(string name)
        //{
        //    var villainToDelete = Villains.Find((v) => v.Name == name);

        //    if (villainToDelete == null)
        //    {
        //        return NotFound();
        //    }

        //    Villains.Remove(villainToDelete);

        //    return Ok(new
        //    {
        //        success = true,
        //        returncode = "200"
        //    });
        //}
    }
}
