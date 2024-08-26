using IplCode2.Models;
using System.Threading.Tasks;

namespace IplCode2.DAO
{
    public interface IplDao
    {
        Task<int> InsertPlayer(Players p);
        Task<List<Players>> GetPlayers();

        Task<List<MatchStatisticsDto>> GetMatchStatistics();
        Task<List<TopPlayersDto>> GetTopPlayer();

        Task<List<MatchDto>> GetMatchesByDateRange(DateTime start, DateTime end);

    }
}
