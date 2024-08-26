using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace IplCode2.Models
{
    public class Teams
    {
        public int TeamId { get; set; }

        public string TeamName { get; set; }

        public string Coach { get; set; }
        public string Category { get; set; }

        public double HomeGround { get; set; }

        public string FoundedYear { get; set; }
        public string Owner { get; set; }



    }

    public class Matches
    {
        public int MatchId { get; set; }

        [MaxLength(20)]
        public string MatchDate { get; set; }

        public string Venue { get; set; }
        public int Team1Id { get; set; }

        public int Team2Id { get; set; }

        public int WinnerTeamId { get; set; }


    }

    public class FanEngagement
    {
        public int EngagementId { get; set; }


        public int MatchId { get; set; }

        public int FanId { get; set; }
        public string EngagementType { get; set; }

        public int EngagementTime { get; set; }




    }

    public class Players
    {
        public int PlayerId { get; set; }


        public string PlayerName { get; set; }

        public int TeamId { get; set; }
        public string Role { get; set; }

        public int Age { get; set; }

        public int MatchesPlayed { get; set; }



    }

    public class MatchStatisticsDto
    {
        public int MatchId { get; set; }
        public DateTime MatchDate { get; set; }
        public string Venue { get; set; }
        public string Team1Name { get; set; }
        public string Team2Name { get; set; }
        public int FanEngagements { get; set; }
    }

    public class TopPlayersDto
    {
        public string PlayerName { get; set; }
        public int MatchesPlayed { get; set; }
    }

    public class MatchDto
    {
        public int MatchId { get; set; }
        public DateTime MatchDate { get; set; }
        public string Venue { get; set; }
        public string Team1Name { get; set; }
        public string Team2Name { get; set; }
    }
}

