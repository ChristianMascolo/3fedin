import { Component } from '@angular/core';
import { Giocattolo } from './model/Giocattolo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'giocattoli';
  valore: number = 0;
  giocattoli: Giocattolo[] = [
    {
      nome: "Gormiti",
      prezzo: 2,
      descrizione: "I Gormiti furono distribuiti nei negozi in Italia da Linea GIG dal 2005 e per l'edicola dalla Grani & Partners, società del Gruppo Preziosi,A partire dalla Seconda Serie, la direzione artistica passò in mano a Gianfranco Enrietto, dove rimase fino alla serie Nature Unleashed. A partire dalla Serie 2018 invece, tale ruolo venne ricoperto da Giorgio Palombi e Gianluca Savalli.",
      image: "https://i.redd.it/chips-mini-gormiti-v0-wa3hvpfrn16b1.png?width=1080&format=png&auto=webp&s=623269e1a0e209bf0cba7008edbc57026f545f3a",
    },
    {
      nome: "Orsacchiotto",
      prezzo: 10,
      descrizione: "Il nome Teddy Bear deriva da un episodio accaduto al Presidente degli Stati Uniti Theodore Roosevelt, soprannominato Teddy, che come passatempo andava a caccia grossa.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTYbOFf3PKOoHaJ3HpY9xhWhdcgpxstUCv0w&usqp=CAU",
    },
    {
      nome: "My Little Pony",
      prezzo: 5,
      descrizione: "My Little Pony (in passato Mio mini pony) è una linea di pony colorati giocattolo indirizzati ad un target di bambini molto piccoli e prodotti dalla Hasbro. I Mio Mini Pony vennero lanciati sul mercato nel 1982 e divennero immensamente popolari negli anni '80, al punto che per un certo periodo superarono le vendite della Barbie. La linea di giocattoli originale ispirò anche una serie televisiva animata ed una serie di lungometraggi.",
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExMVFhUXGRYWGBUYFxkYGBkYGR0eGBgXFx0YHSgiGholGxcYIjEhJikrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGy0mICYtLy0tLS0tLy0tLTAvLS8tLS0tLS0tLS0tLS0vLS8tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAABQQGBwMCAf/EAEAQAAIBAgQDBwIDBwQABQUAAAECEQADBBIhMQVBUQYTImFxgZGhsTLB8AcjQlJictEUguHxFRYkQ5KDorLC4v/EABoBAAIDAQEAAAAAAAAAAAAAAAMEAAIFAQb/xAAzEQABAwIEBAUDBAIDAQAAAAABAAIRAyEEEjFBUWGB8BNxkaGxIsHRBTLh8UJSFGLSI//aAAwDAQACEQMRAD8A3GiivhNRRfaTcW7RWMOQrElj/CoBIHUyRFQOPdo8spa1bmw1A9OprPcXiDOZpMnU89edNUsPIzPsEHxC6oKdMSSe+q0hO2WE5sy+qN/+oNSrPabBttfQesr/APkBWUM07V4JFF/4rTxV8xWz2eIWX/DcRvRgfsakhhWQ8KfWpuIxhUGCRrOh9qCcNeAVzxFqdFZgMPjmtg27twFyNe8IyrvMT1EfNRv/ABDi9piM7sBzKq4PuVobqYBsU/h8IazM2doPAmD56FaxRWY/+csfb/HbQ/3W2B+jCpdr9oVwRnw4PoxX7qaHCIf03EbAHyI+8LQ6Kpdj9oVk/itXB6ZW/MU64Z2ksXwShYQYOZY19priXqYarTEvaQE6oqKMdb/nA9TH3rtbuq34SD6GaiAulFFFRRFFFfCaii+1GxuMS0pdzAH60pB2m4xcUi1ZMO38XQep29arGPtuyqty5ibhlQ0XCFJIJJAZdAPzHWiNYDBJRGsEZifuVYf/ADiWDNaw7OgJGY3baba7N6il+P8A2jCyQLmFdcwzCLltgR1BWRVF4xbxCX+5F1+7KyhdjBXLqu0TuIA6daU8RxRBCtcLlPwk+JQdCQh10HUxtTbKFMm8cdT32VoMw9LMJgiP+0/jvdaYv7TkK5/9LdyzGbMMs7xMRPlXfh/7QhfkWsJdfLEw9sRmmN46Gq32cRsRbH/qbrXPxNbS4IUSQJldDApzheE2lRjYJV9XyGStyJmZ6wdQRQKhpglrW3Bi5cBrxy+kTPldUeyg0kFvuT+PX4Vkw3aNnUN/pn2kqHQsB6TB9Jpvgcal5BctmVPsfMEHY+VULB8TaGcKyqGQ6NAyhdVEnUnf46iXvY3EZ++dQRbuXS6HYMDoWHkYoRacskeh9ttEo9rblo0MdeHfPgrXRRRVEFFV3tZjGS34SRJgx0g6VYqqvay1mCr1dR86fnV6cZxKpUnIYSu2VUhFGrggk7kxrryG1UzFbfH51Z3U9+rCZBueyjJHvLCq9xm1ldlG0yB5EAj7/SmaLpa6+o+CQj0WZcRSgQA6Pj+UvtXivmOldnWYPUTUQimVgTaHkSD9/wA6JTfeFpfqlBgp+KBebnoemvJd+GHX0n/FTHsM2i7nQepNe+znCi8s2iaD1PQVZWuW7cAKNOgk+s0KviWsdlEk8tvPu6x6NMueDE7xxUDGYs2QihhmUAHXnGoP1r7d4kUAgklczMZEKGBIXziV/Uws4yQ7NBIZfENDt5TG0x71D4VafEX1ViBZX8cRmdwQQG5+IHX+33pSs2mG+JVMNGvEk6deHP20XtDKMgS7hoOp4XMpvf4k9u5F06lF8LQwBzuJHKYy69Kl2ns37bBwrQYGUAHQwNtpGp9TWfcdwt5cWM11c7Q9ySXSCXJA0JVoygBdB06P+y91QrajfNGw1ET9qZZQJw4qnW02tfcHh0SVLFs/5HgEQ4yQQ686wWxIMXFzIuN187T4VLdxRbXKCoJHuRz9KZ9j2hH/AL/yFc+1NnMlq6BrBViNhG09Dqa99kwO7b+8/YUutiq7NgxPl7p5inqf2ZaC/wDt/OleJuA7Uz7NDVvar6NWJurLRRRQ11eLjQKovFsddvXSouG3ZRoMEqWjcCIkx5wBV0xv4ayvjGDv23Z1b+LMAdQSDME75TAkeVGoxKYwzM7oETt/C73cCtxj+MAqfGMQxgkkAEFtQYmOlUm6bttyl17iuvIEmfMEsBB5Grli8fdxCKluzctFymdy1oKokFipkk7REbdKScY7O3V8dxu8IYKAMq5kmf4dpJbXqdqbouIb9dvc69RHW4hPYeoQXMLr8CZI5f3JSfGMwVA90EGCRnz5T/UATqPKrlwzgeEKC/bVnQGAxaAWBy6CFMzPLnzil3DntWluhUuWu+XuyGlxESMpU7GTuCfDy5+eGpfUtZVLj2Qc4NoAFcxBIi7lkSsxpqd6C+oaohpc2OQAPETBbI2h1+aNVLshg3HmJt0A4a81Ysbw23YVr2GBUki3dWDqZmRJ3kRE/wAXzDsYy74bdlb6vlKl7yi2iBiZBn8UAyMvMDlpXWyt3EOQwezZnNkdgbjsJymFJC76mdYGnOuwwzjD3rplFIQLOcMDoDOYZtTPzVdCA65PY/qVmzmguIkRMn/aBcbwCeWUcbKIeD2e9W2VL7nV2ykoFkuk5BuI0PnVs7HYw3VJIiIAA6flSzs0viuFlnwSryx1jYgmFOh2A+usvsE0q/qPtVXPc5pnY+ffwOK5WAuDc2uT5zHIiBB0joLnRRRQEsvtV3tDyPQz8VYqrnakwhPQj7iujVQapAMQSSFDACYgHeQNSPIH4HlVd43fD5WjxbT1XKHWfMZt/wDFWO5i8tjMikFrZOYfw+EtqQP5qqOMxhuFZADDPJGgYkbx101pii2Zd5punUBqsEbt+QoTrTPgWHNwskgCMxY7ADcn2+1QGQ7007OXEztaYSl0ZT7ENqOa+HUcxNdzEaLZxbQ6g4HuL+oTqz2gwttRbR2YAEZgBE8yATrXi5YV4Ny9kw0KwIOXvmaSRJ1AEagajy3pKvGLt4X8FcRrl7OotoiiEKN4iNgqAKIP9WuhqdetNhf9G5Ie3azLfgytsuZadNoY66fg6kCqNZkcSBc9dtfsLeSQqYek1uQOgybAzmAbmEGARJ+m4A1MFMMfYsZki4FW6AtsxnErAJzzK7gaz+Q58JwVhXC57jG4zxKhYKwGBhp3UfNK7XBnvLAzdycTcFtpiLbLAuCSJTwp6wetSLGBv2EsPdZLbLiHHjeVK3FUZ5XzVjBjeNKpUa2ow03aHUe491eKLWw2oZExOujsug45QeBOsFR73Z61cvriO9bu3Jy28k3CQxzKAp/DB3n2psOH27YBtOiK40ZmC5tSCADsZ06VF4VhcQlvDX0tG4AbylJyOUckBwHIGoJ+nI6Scfa7trn7tlVsKyWkVC4DsQCkqPxySfOTE0Wo97iASbCIttx5jjyQGYejRqEUnCCSdQdCRF7j6QI2gnjaYUUDKRpGRx1G0/3A7etcOD4Y2cyncM3oRpB+KXf+IX8wsrJvJ3VtVzEqxCBry3AzZMqjnE6b70y4ZxqzeYrEEO9q2RLZkRSwdp1AyjfXcUItOqtUY8MO41+4PUT6Ef4lTnsFtdAPOmvZkaN/dH0H+aS3sVJin/ZkeE+p/Ko6ct1l7p9RRRQ11c721Zv2i4urXTbtkAagE7MwOUieQkEetaHjmhaxDD63VJ2W6wM7fjLGfLWj0Wgy47JjDht3HZWm9YVVAE94FLRuCJAlTzHiHpIqXibBCqrASFDMx5MYgexjTzNQeL49+5xTB0dLWSMghUUZS4JjV4DHTkwB5V04jxQFBdBOe4SvdRlfMTovXUAt5DNS/wClYx2Kp56kSPMatBvPCSOFtSg4qx+mbn3S27aa7dVC4i2NQDIE/hTTczMwYimVjhmV8yHvBbOV1Kd2ZPXNsNjsZEGarNi5es3FLglncEqP4jM5R8xV2Xh6lrsgrnloZsxgkuxUKfC2c+expp7nOaHsMZp0iYBjcHvyVqQZ+2tfLETpeCbSL8/UqDxHAtZGHVj4oY6aSdIJ5TU27b7vBXEB/jBA3ynMJAPMeo5GufaUZu4AMgKRJ5jQjbfQb+XKoD8TW5aezlZHZ2c6yQqnQyP5pOnKDXNAC/YSegudvhFdUcW2iJ2sBJkQB7cBYJlwa5CspYDLakidZJMSOQ09/apnYQkq0rGo/OqZetXBcJVTlVred5E3BAI0HIa1d+w9xXt51Mq0EfXSgVK8FoAs+TPlcaf7C43jUTIFHsgFwuOPAnZW+iiiuIK+1Wu2A/cv7fcVZar3a4fuLn9prrdQoqnaxQbBvMeEOsE8ozCBOusVXOI4Pu7ijMCCA0jzWSPrTF+EMzsACRlkHlm2ifk+wrxxyC9sBSPwLB01AKkegiPamGVGhxa06yY8x/aboUpOY7fYg35Qk+KxRtDMBPKDsRzBqdwbELeKR4DmI6gH6SCD9agHiEOVI8J0kfGvUUYQFLhK6BvEPIglGHyQfT0q+X6bi61Kji4kA8lZsdwRLeNGPNxwwQA21XR3ylMzNOilSJWJkb144fxE22JBIk1zwvEjID+Y8tfI18xFq31jy5CqzIgrK8Kow5ag8t/RW+5cDgjNLZACPUZpHtUQYju2uOwzOVAiYhUUtEwdSTtzNKOCcdbvu6YjKFhWMa6aAnpMfNWaWIYSQYUNrsTr7GOlZFZjqNXNOs7GNyBc668AANAu5XUoY8aieFuwlOM7TqGCgFRnUG4HU6K4DAhliGCvHMgaQSKi8e7Qv/p7dy34O81EMG8MBhqux8QkciKa94LbNcJZpmZXUIoZwFg7y66nyEDlVe1Jm6oZiRlBClcpWSTBXlWjRcx4EDvv4RKVJvih0fT6z6gaL5b4il0/vU8Qzlbts5LgLrkZpGjEr/MDsKLOBS1du3rbjK9u3aspqGtgKq3M3KT3awRvmbbn14Rw+y6F2uZSIUCRqY038yPYN7NzZtDwhpU96pgK3gUnIxKLsYUzPMdas9+WRsmHNYDLQfK8WvwPDQcI3SG2WBmST51f+x5JsgnclvvFUedYIC7DKQQ0HZiT7fNX7ssgFlQDI11gjmetccfpjZK4wsd9UQ7Tp0t5J7RRRQkkofEfw1lF7BhSzCTBcmD1j8Q2kDXStX4j+Gsr4nxtUVsyXFmSp0AYajNPr61R9U04IBPkmsMakOaxszzjj19OEpjwO7bOHe1kBDFmuk6AKYEkEanYVNwQwqIFUEN4QC+5kgeEk9NwNdp3pNwW4t605UND5EObeDmJ9Rsar/ZzhxmwbxJAYXIXTbUAzymD7CknVWh7gBAy56n+zpzReRv5wDYSL8qNcGQLGQBO3trE8ATql+H4w5xGd7hud26lVgAQjAiIHMAfNXu9is1xr1oPcDpKhhlUgoIUHpqSec7TFUm9wRkv/wCnQFyGILKsEjSJ8wsT61azw9FTIUa2qoTnB1MssS2YwQA2wiPLfTc4NpUgCMx0neSALSDqZtoJJ0KI0sbLnaG33v6fY6qVi8cmKZGWQtsZOWpiW3GmpIpJiEW0hvI7s4MEsZkZgQuv9OkeddbmJWxet5ARbcMWSZiQADqdx59TXbG8IY2lyujo7ZhcUjLOYEDQnfXaRpyqhdL6rDoAMu9iLiY1Ji2+wKsxnhvaan7T9jp6T7Ly2Kzs7AEKU8MiPERBjrtHzVg/ZWhFp56qfoZpXh7jpbbD9013XwtClEYQVO0mG1B6j0q39lLJVdQR+EfApZtTMKIGzQN9MtviDfUgqr6obTfTaLTYzwce/wAqz0UV9plJIpH2mH7l/wC1vtTylXHB4G9DUUGqoz3nFm4y/iGqx6DXz9OcUsx/FbN22wYQ4goemug05x10pgt8KAD/ABED6CqpiLH73IObgD3On3q1Cgx5l2oMg6efT8pzMQJ1vfkdfcX/ALUPJJ96Y4VZK+bxJ92+9N//ACjdBGoI5waZ3uy6gDIxkGdR7Ud+JpwPqTBrtBsUqOFObLGu1dLuFVWFtpZzPgBiI0MmPoPXpLMWu5Oe4QEUgljy10jzJ5CoTy1gXiczqWlhoSCZBJBnT1jUxQHVcpadjbqdPhGZUNT92kgeZMx9pg2kXUWxgbbN4HII8UEaxrJEbrE68vKRT21xdlJQm1m0nck6aFo/Dp1ilvDLy20xBOrFAinpMyBzAll+K82gBcbUKGAZmmJJ0gfEn29ruaHWN1aowPJzCw0npMfG902u8RaYa1b+J9CKo9+6926WMszn3JJ0AqyXcSVS4DuA1xOcAtlHsZDR69aidjMKGxSk/wAIZ/caD6matSAYCQEMNFNrnRon2Aw7W7aqRb8ABzSZzBi3JfM8+tSMHhHuSc4Aj+sx4mIA8Q2zEdIAEaVL44Ut22u7ER7kkKJHPUilJvYhLQuM8FngEbxDCTAgDcjfSOdZpwVIZqhaLmTc3JM8eeyTNcuH06nl8fb03Rx7hjIy3c2aSqtpEfykeWnzHWrh2dWLS+lILtwthWa4IhQ0kySqwQx6HSYqw8BuA2UYGQVBB6giQabaAGBoEAWHIIL3Etvx+3Kya0VW+JdqFsXjbe2cunjBk6+X/NOMNxC3cQPbYMp5j7HofKulpAlUdTc0AkWKOJfhrKO0OCuMbUGQGadNSCZJJO2w5Gp3GO1t+1evJcY5FukoApJykGEhRJHOovA+NW8SSZENAE6QVmRvoZJrtfDV8s04IiSONxHQXPmAqU8QKb9YO24uNJ2sSNip2FuWcOFyeMi2TlGgLw3hOnVp2pbhcSiW/Eqi4SEW2JiNNydNW+lWV+BBtSi/FRMdwVCRnOWZAECD8jesluEc8kVy7L9OhF42MAEg+vO6K/EECTA53t5aieZFlA4Xdcrdu2yhUZEdtiSiLmKwDoSYihO7eUbEImeIAJaWIy81GsA6f1Hbeu47MpaBZblxBpOVon4HnXrBcCki6mJxDDaDdMSN5HWtIENIAsdbAT5722tpqDoql5LckCOvmJ46TG+hkEzC4hwVu+AZl8KnKRJlDGsfwnNmEeXnTLCcEvNGa67KIIU7AjmPOjA4REaS9xzzZmzGOkxqKtnDOJ2WkHwZdZYgCPWumhVLnPeIBjfgTw6dZkLr8TngTpO3FeOH8HgSd6cYbDBa+4XE23E23VgOakH7VIqNblAaLRZDmboooorqiKW8ZHgPoaZVB4mPCaiizjG2QV0OoKn4j8h9qgdqMALV9Li/hYj2ZSAR8QfmmjIVdAeqg+8afb61z7RE3MGX523DfJj7MKKx2R7Y0NvX+Qu0nufmnZ39K0Ow6jWvgYVBtWEXMygHNqTJYn1J1rvbdYg7frSaxHgA2PqmSwbJL24sE4ViATkZH8ILTrlIga7Mf+ppZh7LJZKA6sAT67/lvVj43ju7QKASXDAE7ACJPmfEI/UpbSg5Mw8JiRzKAjMPj7insJT/APllcJEyO+RT+Fc8UYOkyO/MfKT2uOYe6kW2ttBhwP5l0kf52PpUTEY6GLMxI0A2AEbA671Ju8BY4i/fYjI4IKzvlACMEHhVoBkydToADoowNl+8WRvr5QJ1+n1FPsda+qdwB8Wm5z25SCbHfmNxKYPin7o3W/8AdOVf7FOp9CQoH9hpr2OxgXEJJHjzWxqJ1GZZHKSsetccDifCqBA23hMa+mbyjbeK9XUW6xW3bIuIQQF0Mg8tOWp12jpUIIVquWo1zCI1vaw0Ejla86iVI7RcQlJuRLOoy841aF6KsAk/1Dqa94fiNy5bs2soIWFAE+IsPDMnffXbXpXU8Ca3ZuXbvdl3CgOS9xlP4QFB0nxHSYG9TOMYNjasW7edIBIYHSdGzA7lpEwQDvpFVa9jQA4wLyTpcEe2vmAvOY7xCQ6j/iREEXiCReNNTsvlniefDmxJW4GCHQSFBkkzoSMuUz1561PtcdvCLVpZVQFznViQNTrpy6GkuNnOXYDN+ImAJIED8qcdl8IWUE7sbjE+hC1ShUa9hfFpt6XKK+oxxLmttNhziT04DglvFXd2m5BPLafQxUPAcQewxZDodGXkR/kdasPanBi1ae5lkgaRuSdANOUms6fjDmItTOUgqxYQSAdSBqJBim6bTVbYclc4yiGQ+1r2/CeceuC4M866DSQSJka+Rqd2P7M2rqC405ST4AYGhgyRqdqREEISTOu0bTWg/s2E4fXk7R6aH7k0Sox9CgIN59uCyX1adfEHKPpjoSN4Vrs4dQsRVc7VOqINJ1q1xVa7V4XPbby1HqKy3tDmlpR3uc0Et1VafiAe2Q5yKsNvsF11+K48Px9sYdjauBxdYsHH4Y/DA90NK8XghdsPbfRXBUmYPtoZ5+8b1FxVzustlVCqoAUAQIIkmP7s1TB0WCoDGizKFcuk5tT+3YDQRPmQBOnRMbnEcug1P0FRbl0tq7E/QCuFpK6lZOwPkIj2n8hW2jKXguLXrQK2nKqTOgE+UmKtPZTiuLuXAHJa3rLEAR0g8zMVUsMLkyEmeWWR9q0fgOHbIpZcrRqOlLYkho0F0ekCTqnOaivuWikEwvVQ+JDw1MqLxAeGoos449dysDzgT5EGdfYiuWAtTh71nkbZyjmG8X/8/FSMch765zzFYHoCPyNTsEkFjAiT9SdPr9ajvpYI70V6VHK6oTuGx7z3w80qwmNQMGDkg7jKw+CBTnD3w2qjTz61WbbMzhFOUFsoMawJJPsAdOfUVOxOJtpbJS4S0hQMwJPMzlGmmvTlGooeJphxABg7fytSoxpe1m56+sKR2mwFth3xdkcgKMpnMdxptsNT0HkKTYQ3MsiY2knN678vIVOGMe5ayuZkFQYMg6HccjA19aMC4yrm/hzJAHI6knrB51bDtexpa/Ud2TDM9OnldeD7bQuGDzOCXM6RGw89q8XLP7wORq6jLPU+IfJI/QpvhcMCJ+dR86eWtdMZglJXMJAEADpqInlEyI2NHAl3qg18WymZNhy27MKscSKAEAHLuh/lO7Kee86TT3D4BxZYMpa66DPAljtlB6+fWaj4vg6u4fMu6zOhIB1kARmj58quWPxQtIzkExyHM8qj5sFTEY2mWN8IzrPLS33PQ6yluEtLcUWr6gtbaYEka6jXno8a1MvX1cm0dCZAP9QAM+okEUj4VxTNfC5pN0s2gMeEeMGNNJAE9NpmpFm0bmJZmBUW3zLyDaCZ6wRv7darDTJOgE/b3KzK3iU3AO1k6aDU/bfeyXcYuzak6TAI6aww+QasXY8jIv8A9VffMG+2tULv+8vXVnRyzD1zSPoSfarf2bR1B9Q0T/FsSPIqSPaq4djG0A1uxPyftCar08gyldv2g462LLWy0M0CBMgGQNuc7Dc1mHB+CXTiApyrcYTcVRpbXTf+ogKfUjzq74KMVxK851FhPD/dcJUN6hLZH+814uqLPEJ2F1Ap9eR+Vj3pyk9zGlrdYze34v3fMr0wXAO0kD1/mB5eyzjGBFkhQSc87xy22FaD2JC/6a3l6a/3T4h81TOM4kDHWifwopMeisfmSKsf7PAclxtlZ/CvIQNSPmP9tXrS7DtLuRnjM26BL0obXcG8x5RH3KulQeJYfOpHWp1ebm1Z6eWZ8cwotlUHmaW8X4abyKUMOhkHeRGo+Y+KsXa3DHOG6afnS3DHwyOVCksdIWFiW+HWOW34SWyoK5iRETPL9eVR+F8TsXbqW5cZmC6qQJOkfOnvUrtOqiw7gLmBzbbnb2Ou+/3qs4fGKzWHW2yMoBLmSGggyCRqBI+aeOLc5stH3WjgHUqxd4hgAWuNecxbbUea2nhPBgoECrBYt5RXnC7V3pcmTJTgsiiiiuKIqPjR4akVxxQ8NRRUbFIBcnzH3NeicquTyM/QH71K4nh5Ay/iJIjr5DzpdeuZlifxDXSIJA/wfrXQAdUy05m2SJMO2UORGhKkzLF5Xw+Qk610w3CO9buw0d2oEcjzZvkx7CuuMxyhbQjRUAO/kYEc5XbWufGOGWsTE3whhWcLctkE8yVmIABI5mdYMyCvVa148Sw5An4v7JxuIeG59CZjl3eEw/1Pd92hRmjOpNoBQEtglnZjGVQxUE7+PSq3+0HGNhr9juYAdM7Cc9t2kCRPiIEjUFdCDTHhnC7loh7eLIe0O78ag22FxVfJGaTqV1mZgCBXDjfAXxgNxr4e6jXFD5CtsC2cvdhJhRmLeKSTHPSutxuGa4DN7HhbUDvql3Odmlpj2Xbs/wAY722lwCJ0KTOUqSCAT+oIqwveLQQNIP3ImqpheCvg7IQuGhypbKwJLAtoD5abnblTey9zND+GAoyjkI0mNjHXXXWitqtqDNRII4xPtIR62HFek0zffpE/IUprRYxlYSN8s+w1gGpvFj32HCl1RwwkMcskAggA7zMj/NJ8U19AVRmALHToOUHdR719wF3EDMSj3DChecRqZ57wfYUvVxNYWygkcJHyD/PFK4eg1gD2uGsi4n3t/XRdMHb7u6jLLBVOUxCz/FqSNhvJ8txXW5jMR3d0vkl4CETmAMgr4RBOUb6R58pGHtYi5P7rux4iAQNzmOubcHOQRHTzrrb4RdOXM4JmXOZvFuRoBH4jOtBLsU+JAA9TE8YgGCBbnEDQz61MOk3PZ5DzKreE4K/e2yRABEidZ9uVaGmDypSbEYTu81wsTl8eUAa5dY51a8I63LasNQQCPer4SlVY0+IN7JWvWNVwJ4bLPuyvCMXax9y4bYFi5aVWJZZzoTlKga7E/wDyqT2u4JeuXFuWssiNyRqCSOR61fEwwFeMVZWCTFaLa7muziJiPaEtVYKgIduZWTcYw7m+fASx0EKSNY2MeVaP2Xwfd2LancKJ/uOrfUmqbx7tBDE2zlQbGPE3pOwqtcU7W4m8YzlE/lTQe/WmqjalRjWGAB3dcpYXw3ufOq3SvhpP2WxJfC2WYycgkny0pzSDhBhFOqr3HcGHBU8516HkfmqrgLRzlSJIBkdY1I+lXPih19NaqWGu/viw5t9DINL1XQZ5JLFsYXUyf9gOnfykHEOGZme2dRrlnUEESAfIjSqw/fWD+NmtgBB/QNsh057T/ir5jbg70f2iT6XDH/2xSnDorWsY7DRrTsR5EOaYfIIjf7Jmvlo4hrgB9UgjyBM23Gx2Wodn+KWsRaz2mkTlIggqw3VgdiJprWe/spxJazcLSAbggRESogfAA9q0KuWOivle36X679gkehKKKKKiiK8XFkV7oqKKrcXwxE+sg9CNjSt8M1xCQsOphgP4hH4h5kH3q54vDBhSIL3bQdjz6evlU0Ks15aZCpBwuZdNCV59ehHSo+M7PXrt1mykgBQpC6lSANNNcuxrQ8oBOgmvU0JjC0kzqjYbEPw7y5u/Ha4P8Kl4PsgXs5bxYAsXCKwENGXMx3JgD2plhuydq2qi2AhDSW1YkRqDJ6wfanr4lBuw/XpXg4sdD6xA+tEEgyHHym3pv1XH4p5qGoTB6JFxvJYyHKGIDMToCqKBmKQpJJMLuILDfYwE45ZV3JsEglYJueIhgMpKtAA1GxOnM6CrFibC3WUtaDFZgkkjXqBoRpzqPcwdu2ADbtrMwBbUkg/i3B0iuA1C85jI2G+nHf1CE0ukZCfXXePXgkL8bxgDNasBgWuQRYZ4Ekoua3AYGMufluZ5u+z+IxRl8SVVXAKpGUoZ2gidRrqTTAYRUQEsAkCANBB1EAVI4bhEuDMBvMdSAYn5qD6dSrmS2Q23FeDi06z6A18/1XRSfpTi3wxRyr7iLa20ZonKCYG5gTAq0ISRXiSCXACxr6c6g9mePixaFpzmgmCDy/X3qudp+073rbC2IABIQGJPIT09Kz3hgxLQTictx3INvQoFAkspDamNJB3J5qSHG0wz6Hi528lluxTqwNSg4BrdSRrodNYhaz2u7dsnd2cOAt26wXMYOVSQAw9Z51O7T8ciwqzq4lj/AEga/J+xqi3xFwX2EwgUHowmT5bioWP4s1xIJn+HzAHL0q7MPkfmOk2HIb9T8ImExzar2NFzFz/2N48miOs9I/EMYbjeXIVwtDWvFdbTAGmN1rrc+ytrJh7QPJF+001vX1UakD1NZf2Bxd+7iC7OxVVMyTGugH5+1WnifDwzFiWM+entNZtRga+CeaGWibleuN8QBU5TM1V1JjTc5o9YEUw4haIACqco0jn6104Vw5nYGYA5R+vL4pQyXLMxrX1KzGU5teeok34QkOKw7IgzGblzl0XnHzHuaT8dxvc4a6mzXcqL/asm4fTUL/urTMfwFXgldRsdarHH+wSYgg5mRgCsjUEEltQTvJOxH2o1y+Si16VSpX8Qm0QBvex+T1hTv2Vuz2rhaScyrOn8KxyA5RO+s1oVIOy3Cv8AT2Vt5sxA1aAsnrA02ge1P66eabtNpjmZPU7nmiiiiuKIoooqKIqFjsIGFTaKiirV3AuP4iBVfxXF7SmIZyOfL61fMWkis/45wlFJYEJPI7e1RCqlwEtUTF8UNwgWpTcmSOWu9GF4066XAGHUb/r1paLY18Wo2gb+kxXxU31H+fSokXHMZKu3B+IqTvKn6GlfaDGKt/vC6hMuQFmAAboJ3NV7D4goZG3MUvxeCGKwj2WGcq3hkkag6ajnE1A4h4HGfWLd8lp/px/cDeBYceStb4kZERyXRQBoeQEaR5VaOy2IV1JQQAcsdANh9azPh+HuW7CI5bMoAkmTzETz0APvWjdiMMVsgndiW/IfQfWuVaDTUFQ6gQBsJ1IHHaeFtytHEvDqIMETtpzNlaaj4u3IqRRXVnKicX7NIxJyAHqNP+DVI4lhO4cqdSYOg35CfPStsv2wRWVdtbf/AKiB/L+dN4R7i/KTZZP6rSpiiagaJkJXdwNy5bMR1y6z6aCPrVbW1lEfnNXbB40W7bZgYynXoQDE+Rql2LUIo6AD6UyWv8Vxdpsj/pJpOoNyASNeM/N/TYaLzFdrFqTXOKl4Hhty7ogmNTtoOtXWqSAJKe4XitywgW1+7HNgASx9YIr1a43iyfDeut6gEfFRcTwZrdsB5ZSRMHSeQNOOEcCQqGssyn30PsRQXPpRmgen9lW8akDlOuqkYDjt4GLqq46xB+lXbguLs3B4TB5qdxVHxTYiz+MB067/ADIoCJch7RKXB0JH/dDdTY8TpzFx1FiulrXX08uwtRyivJtCqhwPtE6j98cyaAt/Eh5Zuqn+arhbcEAgyDrNKvplhgoDmFuq+qsV6ooqiqiiiiooiiiiooiivhNRMXjQo01NcJAElQCV54hjVQa78hVQ4xZF7UkgjbmPiveNxRuOSToDH/FTsNg84nlSbajqtSGmAO7ph9JjWfUJlU/FYIIROYjeYj9a1HHp+fwTXvtdi71u9kttktqAGhd2bqeQyk8t6rHD+P3O+VbmTJ1j+HrvWiyk6OKo79FruYKlOCCJi8iZIAtFxB1m4nYl7faB9AOpOgHzU04DurJUHxaZiObc4r5ZtLcKkEG3+LNuG6ZY+/6E3FuBpyFWZTvJRf0zDOY3xHCCdl44Vg3vWhBBMka+VaBwHCm3aVSZIAE1XuwtoFX00zSPca/lV0RYobiZhcxNRxcWnQFeqKKKqllzv7VlnbE5cTm6x/itVcaVn3bvDKAHO4MfOv5UfDOy1Akf1KnnwzuV/RVs4mOWhGs+dL04dbdsqnKrTIzaDnK8wP6dtqnrdm0wOkx8LtUGzIbMgXNoNSRKzqJHlPvWyRZeUw1ZzKlnEA6xIt0I/PBeeB8B7y7cGdgiBFAmfFDM2/KCnwal4W73TO9lb9rRrX7y2E1BH722SCQDPOZAMLvMvhWJFu6Vbw96RGkSRpI9RHxTTADvXbEXbLg20u20tFvC6mCxgAnMY006b8k3uh5tb+PyvU4KsXUBJNrGdZ637Cdth1fQqQtxZymJEiYMEiQdNKQ8PdsLfynVTp6jr67+4PWnPA7OTDWVyNbyLlCMZKhTtPQbCdYivnH8HnQsN1MT+vOKSaQ15btp+Pyj1gX087dRcfjr7p9dwSuuZdQRPzVN4xwlrJNy0NtWXy6j/FWTsdxHPbynddKbcSwYYTVWudSfb+0xQrZmh7d1nmGx8OHEGRDDqDvp0IM/NW/gOLyOLUzbcZrR6fzJ7biqJx2x3F4Efhn4B/5+gpnhMdlSOdtluJ/tPiHus/BpyowPYC3fsenwnXNzNBHfD0+LLT6K4Ya6GUMNiAR713rOSaKKKKiiKj4m9lHnyruTSjHXfF+v1yqrjAXQJRcvTz9Ty+KX4u/A6k/qfSvVy5pPLkOvn6fr1XX7+Y6ak/rTypStUDRJ6d8EdjCT33K427WZ486teFs5U9qVcKwmuu/Wm3FMWlmy1xzCqNYEnUwABzJJA96JhaWRsnU9hcqONR4a0TsOayDt9YLX738pCjQwZyqZ2/6OvKq1wywGxFuGLRqxjTyUTvyHzTbtbfe9iyVBSSAVIMxpEkGJ3qxdnez62kzMssw0J5Tz9ftWjUf4dMRrH2XoqlVuGwzGuiS0AADkJkyQb7iJ5zJ7iZEgifKvOLElVHp61MtwUIO6n/r/ABXG00XQemtLUsSXUnPcNEiHy0mNFc+zGA7pAPc+tP6U8Hxaso/WvT1ptUBm6xnTJnVFFFFdVV8NZ5+0HGAlbI1My3kOX51e8bdKqY3jSsq4VN/EBrp1Z/FPXWPaQKawrAXF50bdZf6pWc1jaLNXnLPC4/I6SlfEkdMikEKx+Y5fryq69lOGh7KnoWH1P+ajdsuHgWC3NSpHuaZfs9xQNsrzEH2I/wAj60Wo81cPmOoPfylsNRbhceKYNiwxPmP/ACfhRe03ZsXEjZhqp6Hp6VX+D8WYE2LxKsJAfn/3961XGWAwrJO3dkJiVy6GJPyQPtQsMcx8M9OSa/UQaTfHbqIBGxH5Gx1hWHCcZKBLV9hKwpbm7NADjSCN51MROutOFdWTcEGRI16g/aKr+J4T3mHRXnZGB6MCCD/kcxIqN2Q4qbhuWCADZCs20hrrOzLpppKfJrjmB7XPbqNfymKTnscGO0OnHyPx5+al8Gu9zf8AI6/r4rQVbMtZ7ft/vGHMzHtt9RVu7O43OgHMVyuJh3feqHg/oJp8zHr/AEqt23wciY6/G9V7DmbcHeI+n6+taF2iwmZSOtZ7atlSQeRj/H686PhnS3LwW1QdaOC0jsjic+Ht9QMvxpT6qh2FeEZejSPQ1b6UqiKhHNL1BDyiiiihqi44l4FVziOLAOvxTriTaVVbuGLt6/qKUxRfZrBqjUcurlHu4h7hgbdeVMeH4E/80wwHChAkU4tYYCu0sMG/U4yVH1s1hYKNhLER5Uh7eYkLZCkZgzgEf0gMzH2yzVsyVR+3Fxs1tVIzeNgp2fKACnurNTjP3K+EE1m8pPDQE6jTTXbVUi/blbRnNmLnNzIU5VmPKPr1rTVwwa0rDYgEe4ms0sOGFoBSAGurBEQTluR9T8Vo3Y/Fh7JtH8Vvw/7Tqp+49qs4W6pvG0zkDuBd6Fx4W2AtbhZIuKWcoLDnofv+VL7qksY3gH4p12oULI8ify/OlOHuwyN1WD7ih+EBQc3zKJSzHDTvfv2TLhGPKanY6EVd+H386A1m7kA6DQ8uf/VXjs5dBtiKz8I8yW7JCu0ap1RRRWgllFxyStZfxmz3OJPJX/PePOtYYSKoXbzBeDOBqp+h0+8UxhamSoOdu+qz/wBUoeLhncRf019l54vje+wVwN+Ncubzggg+8feuf7PbnijqPtH+ar+HxsWHmSQMvz18gRTHsZdyXl/uI9iD+cU86jlp1GjTULGZjBUxGHqO/d+0/E9QVp94+Gsd7Qv3+LuMNh4R6Lp95PvWmdpOIdzYd+YGnqdB9TWa9ncMXcDmSNfImTS+CbGaodv7Tv6xUzGnhx/kf4H39FpT4Qd3EbCKoXCOHnD4u/c/9t7gLHoGQLB6wczfFaSw8FZ9x7iVq2l13TvEBUOneZNLn7tWkAneBp1nkaDhpnLxt3zWni2yBBggyOl78uKl41ctzz1HvP8AzU3ht027gI/C350t4ViDibFm6y5GdFYrJPKAZOpkQZ86sPD8ATBPKuuIYMp8u+oVDRLqmYW376fCeYm1nWqHx/hmUlwPX8jWiWl0ik/HMICp9DQabyx0p5rsplVLspjslzXY6GtHtPImsusYUqZE1oPA7hNtZ6UxigJzBGrgTITOiiilEuuGIsZq4WcCAZip1FRRfFEV9ooqKL4aof7RcGzWw6DxowIImYOh29j7VfaiYrCBqs12UyjYeuaFVtVuoM/x10PJY9wHDYm60tbIACkswKqSp5eZBcGOtXjszwu5bulywgrlIE66gg+0H5qx2eGgVLt4cCoXSi1sY6pIa0NB2CqvarCFhIEnX4P/ADFVpgQqkiCNI9K0rFYUMKR3+AqzarPuR9q618CCrYfF+G3I4SPf5iOiW4PhOcAxIMH5q0cMwuQQBFd8HhgqgRsIqSBQmsa3QJMuJX2iiirLiKTcdwXeIy9QRTmvLLNSYXCARBWQ8X7PXUQC34iWGaNPMaesU67IYC4LmZ0I5zpvEfmavN7AKeVfcPggtM/8p5YWnfdZ4/S6DarajZGXQbddz6pV2k4X39ruySBIMjypZwDs6LThpJjrEdPzq4lAaFtgUEVHhuUGyadhqTqgqOaC4aHuyiY234CPKsg43+zrEX8TcujE5RcgZcjRlWMqnxQYKg+utbWyzXL/AE61ajXfROZhg+QPyCiuaHapRwjgypbRf5VVf/iI/KnNu0BXtVivVCVkVGxdnMKk0VFFWU4PDaDSnuDs5RUiK+10knVRFFFFcURRRRUURRRRUURRRRUURRRRUURXI0UVFF0FfaKKiiKKKKiiKKKKiiKKKKiiKKKKiiKKKKiiKKKKiiKKKKiiKKKKiiKKKKii/9k=",
    },
  ];

  /* formatLabel(value: number): string {
    this.valore = value;
    return `${value}`;
  } */

  nextIndex(){
    if(this.valore == this.giocattoli.length -1){
      this.valore = 0;
      return;
    }

    this.valore += 1;
  }

  prevIndex(){
    if(this.valore == 0){
      return;
    }

    this.valore -= 1;
  }

}