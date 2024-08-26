using IplCode2.DAO;
using IplCode2.Models;
using Microsoft.AspNetCore.Mvc;

namespace IplCode2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IplController : Controller
    {
        //private readonly IProductRepository _productRepository;
        private readonly IplDao _itemDao;

        public IplController(IplDao itemDao)
        {
            _itemDao = itemDao;
        }

        [Route("Get-all-players")]
        [HttpGet]

        public async Task<ActionResult<List<Players>>> GetPlayers()
        {
            var players = await _itemDao.GetPlayers();
            if (players == null)
            {

                return NotFound();
            }
            return Ok(players);
        }

        [HttpGet("GetMatchStatistics")]
        public async Task<ActionResult<List<MatchStatisticsDto>>> GetMatchStatistics()
        {
            var matchStatistics = await _itemDao.GetMatchStatistics();
            return Ok(matchStatistics);
        }

        [Route("Get-top-players-by-fan-engagements")]
        [HttpGet]
        public async Task<ActionResult<List<TopPlayersDto>>> GetTopPlayersByFanEngagements()
        {
            var players = await _itemDao.GetTopPlayer();
            if (players == null)
            {
                return NotFound();
            }
            return Ok(players);
        }



        [HttpGet("GetMatchesByDateRange")]
        public async Task<ActionResult<List<MatchDto>>> GetMatchesByDateRange(DateTime startDate, DateTime endDate)
        {
            var matches = await _itemDao.GetMatchesByDateRange(startDate, endDate);
            if (matches == null)
            {
                return NotFound();
            }
            return Ok(matches);
        }



        [Route("AddPlayer")]
        [HttpPost]
        public async Task<ActionResult<Players>> AddPlayer(Players player)
        {
            if (player != null)
            {
                int res = await _itemDao.InsertPlayer(player);

                if (res > 0)
                {
                    return Ok(player);

                }
                return BadRequest("Failed to add player");
            }
            else
            {
                return BadRequest();
            }
        }




    }
}




