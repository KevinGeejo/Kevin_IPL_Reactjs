using IplCode2.Models;
using Npgsql;
using System.Data;

namespace IplCode2.DAO
{
    public class IplDaoImplementation : IplDao
    {

        NpgsqlConnection _connection;
        public IplDaoImplementation(NpgsqlConnection connection)
        {
            _connection = connection;

        }

        public async Task<List<Players>> GetPlayers()
        {
            string query = @"select * from ipl.players";
            string errorMessage = null;
            Players player = null;
            List<Players> playerList = new List<Players>();

            try
            {
                using (_connection)
                {
                    await _connection.OpenAsync();
                    NpgsqlCommand command = new NpgsqlCommand(query, _connection);

                    command.CommandType = CommandType.Text;

                    NpgsqlDataReader reader = await command.ExecuteReaderAsync();
                    if (reader.HasRows)
                    {

                        while (reader.Read())
                        {
                            player = new Players();
                            player.PlayerId = (int)reader.GetInt32(0);
                            player.PlayerName = (string)reader.GetString(1);
                            player.TeamId = Convert.ToInt32(reader["team_id"]);
                            player.Role = reader["role"].ToString();
                            player.Age = Convert.ToInt32(reader["age"]);
                            player.MatchesPlayed = Convert.ToInt32(reader["matches_played"]);





                            playerList.Add(player);
                        }

                    }
                    reader?.Close();


                }


            }
            catch (NpgsqlException e)
            {
                errorMessage = e.Message;
                Console.WriteLine("-----Exception-------" + errorMessage);
            }


            return playerList;
        }

        public async Task<int> InsertPlayer(Players p)
        {
            int rowsInserted = 0;
            string message;

            string insertQuery = @$"insert into ipl.Players(player_id,player_name,team_id,role,age,matches_played) values ({p.PlayerId},'{p.PlayerName}',{p.TeamId},'{p.Role}',{p.Age},{p.MatchesPlayed})";


            try
            {
                using (_connection)
                {
                    await _connection.OpenAsync();
                    NpgsqlCommand insertCommand = new NpgsqlCommand(insertQuery, _connection);

                    insertCommand.CommandType = CommandType.Text;

                    rowsInserted = await insertCommand.ExecuteNonQueryAsync();
                }
            }
            catch (NpgsqlException e)
            {
                message = e.Message;
                Console.WriteLine("-----Exception-------" + message);
            }
            return rowsInserted;
        }


        public async Task<List<MatchStatisticsDto>> GetMatchStatistics()
        {
            string query = @"
                select 
                    m.match_id,
                    m.match_date,
                    m.venue,
                    t1.team_name AS team1_name,
                    t2.team_name AS team2_name,
                    COUNT(fe.engagement_id) AS fan_engagements
                from 
                    ipl.matches m
                join 
                    ipl.teams t1 ON m.team1_id = t1.team_id
                join 
                    ipl.teams t2 ON m.team2_id = t2.team_id
                left join 
                    ipl.fan_engagement fe ON m.match_id = fe.match_id
                group by 
                    m.match_id, m.match_date, m.venue, t1.team_name, t2.team_name
                order by 
                    m.match_date";

            List<MatchStatisticsDto> matchStatisticsList = new List<MatchStatisticsDto>();

            try
            {
                using (_connection)
                {
                    await _connection.OpenAsync();
                    NpgsqlCommand command = new NpgsqlCommand(query, _connection);
                    command.CommandType = CommandType.Text;

                    NpgsqlDataReader reader = await command.ExecuteReaderAsync();
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            var matchStatistics = new MatchStatisticsDto
                            {
                                MatchId = reader.GetInt32(0),
                                MatchDate = reader.GetDateTime(1),
                                Venue = reader.GetString(2),
                                Team1Name = reader.GetString(3),
                                Team2Name = reader.GetString(4),
                                FanEngagements = reader.GetInt32(5)
                            };

                            matchStatisticsList.Add(matchStatistics);
                        }
                    }
                    reader?.Close();
                }
            }
            catch (NpgsqlException e)
            {
                Console.WriteLine("-----Exception-------" + e.Message);
            }

            return matchStatisticsList;
        }


        public async Task<List<TopPlayersDto>> GetTopPlayer()
        {
            string query = @"
                        SELECT
                            p.player_name,
                            COUNT(DISTINCT m.match_id) AS total_matches_played
                        FROM
                            Players p
                        JOIN
                            Matches m ON p.team_id = m.team1_id OR p.team_id = m.team2_id
                        JOIN
                            Fan_Engagement fe ON m.match_id = fe.match_id
                        GROUP BY
                            p.player_name
                        ORDER BY
                            total_matches_played DESC
                        LIMIT 5";

            //List<TopPlayersDto> topplayerList = new List<TopPlayersDto>();
            string errorMessage = null;
            TopPlayersDto player = null;
            List<TopPlayersDto> playerList = new List<TopPlayersDto>();

            try
            {
                using (_connection)
                {
                    await _connection.OpenAsync();
                    NpgsqlCommand command = new NpgsqlCommand(query, _connection);

                    command.CommandType = CommandType.Text;

                    NpgsqlDataReader reader = await command.ExecuteReaderAsync();
                    if (reader.HasRows)
                    {

                        while (reader.Read())
                        {
                            player = new TopPlayersDto();
                            player.PlayerName = reader["player_name"].ToString();

                            player.MatchesPlayed = Convert.ToInt32(reader["total_matches_played"]);





                            playerList.Add(player);
                        }

                    }

                    reader?.Close();

                }


            }
            catch (NpgsqlException e)
            {
                errorMessage = e.Message;
                Console.WriteLine("-----Exception-------" + errorMessage);
            }


            return playerList;
        }



        public async Task<List<MatchDto>> GetMatchesByDateRange(DateTime startDate, DateTime endDate)
        {
            string query = @"
        SELECT 
            m.match_id,
            m.match_date,
            m.venue,
            t1.team_name AS team1_name,
            t2.team_name AS team2_name
        FROM 
            ipl.matches m
        JOIN 
            ipl.teams t1 ON m.team1_id = t1.team_id
        JOIN 
            ipl.teams t2 ON m.team2_id = t2.team_id
        WHERE 
            m.match_date BETWEEN @startDate AND @endDate
        ORDER BY 
            m.match_date";

            List<MatchDto> matchList = new List<MatchDto>();

            try
            {
                using (_connection)
                {
                    await _connection.OpenAsync();
                    NpgsqlCommand command = new NpgsqlCommand(query, _connection);
                    command.Parameters.AddWithValue("@startDate", startDate);
                    command.Parameters.AddWithValue("@endDate", endDate);
                    command.CommandType = CommandType.Text;

                    NpgsqlDataReader reader = await command.ExecuteReaderAsync();
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            var match = new MatchDto
                            {
                                MatchId = reader.GetInt32(0),
                                MatchDate = reader.GetDateTime(1),
                                Venue = reader.GetString(2),
                                Team1Name = reader.GetString(3),
                                Team2Name = reader.GetString(4)
                            };

                            matchList.Add(match);
                        }
                    }
                    reader?.Close();
                }
            }
            catch (NpgsqlException e)
            {
                Console.WriteLine("-----Exception-------" + e.Message);
            }

            return matchList;
        }

    }
}
