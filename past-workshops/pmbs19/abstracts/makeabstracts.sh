#!/bin/bash

paper=1

while IFS= read -r line; do
	title=`echo "$line" | awk -F'\t' '{print $1}'`
	authors=`echo "$line" | awk -F'\t' '{print $2}'`
	abstract=`echo "$line" | awk -F'\t' '{print $3}'`

	file="paper${paper}.html"
cat >${file} << EOF
<html>
<head>
  <style type="text/css">
      .gwd-div-n77o {
         position: absolute;
         width: 680px;
         color: rgb(0, 0, 0);
         font-family: Helvetica;
         text-align: justify;
     }
  </style>
</head>
<body>

<div class="gwd-div-n77o">
<h1>${title}</h1>
<h3>${authors}</h3>
<p>
${abstract}
</p>
</div>
</body>
</html>
EOF

paper=$(( ${paper} + 1 ))

done <papers.csv
