<?php
$shortcut = array(
    'title' => 'Bugs & Feedback',
    'url' => 'http://alitursucular.com/colorconversion/bugs-and-feedback.php'
);
?>
<?php include '_headersubpages.php' ?>


<div class="row">
    <div class="col-md-12">
        <h1 class="text-center whatwhat">Bugs <b>&</b> Feedback</b></h1>
    </div>
</div>

<div class="row">
    <div class="col-md-12 whatdetails text-center" style="margin-bottom: 50px;">
        <p>Please share your thoughts about <b>colorconversion.co</b>. I will take into account every feedback and bug
            reports. Besides, what kind of enhancements, extra conversions etc. would you like to see in further
            versions?</p>
    </div>
    <div class="col-md-12">
        <div id="disqus_thread"></div>
        <script type="text/javascript">
            /* * * CONFIGURATION VARIABLES * * */
            var disqus_shortname = 'colorconversion';

            /* * * DON'T EDIT BELOW THIS LINE * * */
            (function () {
                var dsq = document.createElement('script');
                dsq.type = 'text/javascript';
                dsq.async = true;
                dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
            })();
        </script>
        <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments
                powered by Disqus.</a></noscript>
    </div>
</div>

<?php include '_footersubpages.php' ?>

