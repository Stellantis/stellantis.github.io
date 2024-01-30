<!-- Piwik -->
//marqueur mod�le v6- aout 2018 par F.ROUILHAC
//
// v1 - marqueur Piwik int�grant les variables personalis�es
// v2 - marqueur prenant en compte les urls de prod, preprod, dev et internet
// v3 - ajout preconisation CNIL (duree de vie du cookie de 13 mois)
// v4 - prise en compte OV et url en matomo
// v5 - correction unl pour internet : prise en compte de matomo30/ matomo31 + prise en compte psa-cloud

// Initialiser la variable site_pwk_id avec le num�ro de site PIWIK transmis lors de la cr�ation du suivi
//<script type="text/javascript">
<!-- Numero ID du site -->
 var site_pwk_id = 550;
 
<!-- Lignes personalisables --> 
 var _paq = _paq || [];
  _paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
  
 // you can set up to 5 custom variables for each visitor
 // Les variables Direction, Etablissement, Pays sont d�di�es � PIWIK
		_paq.push(["setCustomVariable", 1, "Direction", get_pwk_cookie ('pwk_psa_dir'), "visit"]);
		_paq.push(["setCustomVariable", 2, "Etablissement", get_pwk_cookie ('pwk_psa_etb'), "visit"]);
		_paq.push(["setCustomVariable", 3, "Pays", get_pwk_cookie ('pwk_psa_pays'), "visit"]);
	//_paq.push(["setCustomVariable", 4, "TypeUser", cvTypeUser, "visit"]);
	// _paq.push(["setCustomVariable", 5, "Age", cvAge", "visit"]);

// you can set up to 5 custom variables for each action (page view, download, click, site search)

	//  _paq.push(["setCustomVariable", 1, "Marque", cvMarque, "page"]);
	//  _paq.push(["setCustomVariable", 2, "Filiale", cvFiliale, "page"]);
	//  _paq.push(["setCustomVariable", 3, "DR", cvDR, "page"]);
	//  _paq.push(["setCustomVariable", 4, "Secteur", cvSecteur, "page"]);
	//  _paq.push(["setCustomVariable", 5, "PDV", cvPDV, "page"]);

    _paq.push(["trackPageView"]);
    _paq.push(["enableLinkTracking"]);
	
	_paq.push([function() {
					var now = new Date(),
						nowTs = Math.round(now.getTime() / 1000),
						visitorInfo = this.getVisitorInfo();
					var createTs = parseInt(visitorInfo[2]);
					//var cookieTimeout = 15768000; // 6 mois en secondes
					var cookieTimeout = 33696000; // 13 mois en secondes
					var endCookieTs = createTs + cookieTimeout - nowTs;
			this.setVisitorCookieTimeout(endCookieTs);
							}]);


<!-- Recherche de Cookie -->	
  function get_pwk_cookie(name){
     if(document.cookie.length == 0)
       return null;

     var regSepCookie = new RegExp('(; )', 'g');
     var cookies = document.cookie.split(regSepCookie);

     for(var i = 0; i < cookies.length; i++){
       var regInfo = new RegExp('=', 'g');
       var infos = cookies[i].split(regInfo);
       if(infos[0] == name){
         return unescape(infos[1]);
       }
     }
     return null;
   };
<!-- Fin de recherche de Cookie -->

function get_pwk_server() 
	{

		//   AVANT :   var intraneturl = "http://recolte-intra.piwik.inetpsa.com";
		var intraneturl = "http://matomo10.inetpsa.com";
		//   AVANT :var preprodurl = "http://piwik.preprod.inetpsa.com";
		var preprodurl = "http://matomo20.inetpsa.com";
		
		
		//   AVANT : var preprodsecure = "https://piwik-secure.preprod.inetpsa.com" ;
		var preprodsecure = "https://matomo21.inetpsa.com" ;
		//   AVANT : var intranetsecure = "https://recolte-intra-secure.piwik.inetpsa.com" ;
		var intranetsecure = "https://matomo11.inetpsa.com" ;
		
				
		
		//   AVANT :var interneturl = "http://recolte-pwk.mpsa.com";
		var interneturl = "http://matomo30.mpsa.com";
		//   AVANT :var internetsecure = 'https://recolte-secure-pwk.mpsa.com';
		var internetsecure = 'https://matomo31.mpsa.com';

	var thishost = this.location.host;
	//var thishost = "toto-dev.psa-cloud.com" ;
	//alert("host : "+thishost);
	//alert("domaine : "+thishost);
	
		
	if ((thishost.indexOf("inetpsa.com") != -1) | (thishost.indexOf("psa-cloud.com") != -1))
	{
		var addrintra = '';
		if (thishost.indexOf(".preprod.inetpsa.com") != -1)
		{
			 if (location.protocol == 'https:')  
			{
				addrintra = preprodsecure;
				//alert("preprod_https : "+addrintra);
			}
			else
			{
				addrintra = preprodurl;
				//alert("preprod_http : "+addrintra);
			}
		}
		else
		{
			if ((thishost.indexOf(".dev.inetpsa.com") != -1) | (thishost.indexOf("-dev.psa-cloud.com") != -1))
			{
				if (location.protocol == 'https:')  
				{
					addrintra = preprodsecure;
					//alert("preprod_https : "+addrintra);
				}
				else
				{
					addrintra = preprodurl;
					//alert("preprod_http : "+addrintra);
				}
			}
			else
			{
				if (location.protocol == 'https:')  
				{
					addrintra = intranetsecure;
					//alert("prod_https : "+addrintra);
				}
				else
				{
					addrintra = intraneturl;
					//alert("prod_http : "+addrintra);
				}
			}
		}
		return (addrintra);
	}
	else
	{
                var addr = '';
                if (location.protocol == 'https:') 
		{
			addr = internetsecure;
			//alert("prod_internet_https : "+addr);
                } 
		else 
		{
			addr = interneturl;
			//alert("prod_internet_http : "+addr);
                }
        return (addr);
	}
};
							
<!-- Fin de recherche de URL serveur de r�colte - F. PERAL ->	


  (function() {
     var u=get_pwk_server() +"/";
     //alert("serveur : "+u);
    _paq.push(["setTrackerUrl", u+"piwik.php"]);
    _paq.push(["setSiteId", site_pwk_id]);
    var d=document, g=d.createElement("script"), s=d.getElementsByTagName("script")[0]; g.type="text/javascript";
    g.defer=true; g.async=true; g.src=u+"piwik.js"; s.parentNode.insertBefore(g,s);
  })();
//</script>  
<!-- End Piwik Code -->
