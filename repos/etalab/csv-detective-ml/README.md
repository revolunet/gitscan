# CSV Detective with ML column types detection features

Installation : 

```
#Installation and preparation
git clone git@github.com:etalab/csv-detective-ml.git
cd csv-detective-ml
mkdir tests/out

#Install env and activate it
conda env create -f environment.yml
conda activate csv_deploy
```

#Working example
```
#Available option for rb_ml_analysis argument : "ml" ; "rule" ; "both"
python analyze_csv_cli.py tests/in/ tests/out/ YYYY-MM-DD --rb_ml_analysis=both
```
