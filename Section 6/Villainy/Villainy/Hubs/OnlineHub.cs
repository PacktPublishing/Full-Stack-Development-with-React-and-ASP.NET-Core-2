using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace Villainy.Hubs
{
    public class OnlineHub : Hub
    {
        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }
    }
}