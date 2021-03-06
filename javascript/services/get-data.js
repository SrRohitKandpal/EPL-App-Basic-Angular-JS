//DEFINIG-SERVICE-TO-GET-DATA
app.factory('Matches', [ '$http', function MatchesFactory($http){
  return {
    getDataOf2015 : function (){
      return $http({
        method: 'GET',
        url: 'https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json'
      });
    },
    getDataOf2016 : function(){
      return $http({
        method: 'GET',
        url: 'https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json'
      });
    }
  };
}])
;
